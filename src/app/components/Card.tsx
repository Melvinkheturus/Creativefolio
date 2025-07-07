import GlowShimmerCard from "@/components/GlowShimmerCard";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <GlowShimmerCard>
      {children}
    </GlowShimmerCard>
  );
} 