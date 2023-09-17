
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <main>
        <div>最外面layout</div>
        
        {children}
        </main>
  )
}
