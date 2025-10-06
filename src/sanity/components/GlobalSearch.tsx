'use client'

import React, { useState, useRef, useEffect } from 'react'
import { SearchIcon } from '@sanity/icons'
import { Box, TextInput, Card, Stack, Text } from '@sanity/ui'
import { useRouter } from 'sanity/router'
import { useClient } from 'sanity'

type SearchResult = {
  _id: string
  _type: string
  title?: string
  name?: string
}

export default function GlobalSearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const client = useClient({ apiVersion: '2023-01-01' })

  // Handle search input change
  const handleSearch = async (searchQuery: string) => {
    setQuery(searchQuery)
    
    if (searchQuery.length < 2) {
      setResults([])
      setIsSearching(false)
      return
    }

    setIsSearching(true)
    
    try {
      // Search across all document types with title or name fields
      const searchResults = await client.fetch<SearchResult[]>(
        `*[_type in ["project", "experience", "skill", "testimonial", "tool", "siteSettings"] && (title match $searchText || name match $searchText)][0...10]{
          _id,
          _type,
          title,
          name
        }`,
        { searchText: `*${searchQuery}*` }
      )
      
      setResults(searchResults)
    } catch (error) {
      console.error('Search error:', error)
      setResults([])
    } finally {
      setIsSearching(false)
    }
  }

  // Navigate to document on click
  const handleResultClick = (result: SearchResult) => {
    router.navigateIntent('edit', {
      id: result._id,
      type: result._type,
    })
    setShowResults(false)
    setQuery('')
  }

  // Close results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div ref={searchRef} style={{ position: 'relative', width: '300px' }}>
      <TextInput
        fontSize={2}
        icon={SearchIcon}
        onChange={(event) => handleSearch(event.currentTarget.value)}
        onFocus={() => setShowResults(true)}
        placeholder="Search documents..."
        value={query}
      />
      
      {showResults && (results.length > 0 || isSearching) && (
        <Card 
          padding={3} 
          radius={2} 
          shadow={2}
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            zIndex: 1000,
            marginTop: '4px',
            maxHeight: '400px',
            overflowY: 'auto'
          }}
        >
          <Stack space={2}>
            {isSearching ? (
              <Text size={1}>Searching...</Text>
            ) : results.length > 0 ? (
              results.map((result) => (
                <Card 
                  key={result._id} 
                  padding={3} 
                  radius={2}
                  tone="primary"
                  onClick={() => handleResultClick(result)}
                  style={{ cursor: 'pointer' }}
                >
                  <Stack space={2}>
                    <Text size={1} weight="semibold">
                      {result.title || result.name || 'Untitled'}
                    </Text>
                    <Text size={0} muted>
                      {result._type}
                    </Text>
                  </Stack>
                </Card>
              ))
            ) : query.length >= 2 ? (
              <Text size={1}>No results found</Text>
            ) : null}
          </Stack>
        </Card>
      )}
    </div>
  )
}