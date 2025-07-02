export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-card p-6 shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
      {children}
    </div>
  );
} 