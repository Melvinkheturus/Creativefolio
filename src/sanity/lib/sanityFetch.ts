import { createClient } from 'next-sanity'; 
 import { apiVersion, dataset, projectId } from '../env'; 
 
 // Create a client for fetching data 
 export const client = createClient({ 
   projectId, 
   dataset, 
   apiVersion, 
   useCdn: process.env.NODE_ENV === 'production', 
 }); 
 
 // Type for error handling 
 type FetchError = { 
   message: string; 
   status?: number; 
 }; 
 
 // Generic type for the fetch function 
 export type SanityFetchResult<T> = { 
   data: T; 
   error: FetchError | null; 
   isFromCMS: boolean; 
 }; 
 
 /** 
  * Fetches data from Sanity with error handling and fallback values 
  * @param query The GROQ query to execute 
  * @param fallbackData Default data to use if the query fails or returns empty (REQUIRED) 
  * @param params Optional parameters for the query 
  * @returns Object containing data, error, and isFromCMS flag 
  */ 
 export async function sanityFetch<T>( 
   query: string, 
   fallbackData: T, 
   params: Record<string, any> = {} 
 ): Promise<SanityFetchResult<T>> { 
   try {
     const data = await client.fetch<T>(query, params); 
 
     // Check if data is empty (null, undefined, empty array, or empty object) 
     const isEmpty = 
       data === null || 
       data === undefined || 
       (Array.isArray(data) && data.length === 0) || 
       (typeof data === 'object' && Object.keys(data).length === 0); 
 
     if (isEmpty) { 
       console.warn(`[Sanity] Empty data returned, using fallback`); 
       return { 
         data: fallbackData, 
         error: null, 
         isFromCMS: false, 
       }; 
     } 
 
     // Return successful result 
     return { 
       data, 
       error: null, 
       isFromCMS: true, 
     }; 
   } catch (error) { 
     // Log error for debugging 
     console.error('[Sanity Error]:', error); 
 
     // Return fallback data with error details 
     return { 
       data: fallbackData, 
       error: { 
         message: error instanceof Error ? error.message : 'Unknown error occurred', 
         status: error instanceof Error && 'status' in error ? (error as any).status : undefined, 
       }, 
       isFromCMS: false, 
     }; 
   } 
 } 
 
 /** 
  * Helper function to check if a Sanity document exists 
  * @param documentId The ID of the document to check 
  * @returns Boolean indicating if the document exists 
  */ 
 export async function documentExists(documentId: string): Promise<boolean> { 
   try { 
     const result = await client.fetch( 
       `*[_id == $id][0]._id`, 
       { id: documentId } 
     ); 
     return !!result; 
   } catch (error) { 
     console.error('[Document Check Error]:', error); 
     return false; 
   } 
 }