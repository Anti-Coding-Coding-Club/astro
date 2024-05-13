import { Content, RootLayout, Sidebar } from '@/components'

function App() {
  return (
    <RootLayout>
      {/* make colors user editable in settings.json file */}
      <Sidebar className="p-2 bg-[#252525]">Sidebar</Sidebar>
      <Content className="border-l  bg-[#191919] border-l-[#333333]">Content</Content>
    </RootLayout>
  )
}

export default App
