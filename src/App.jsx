import * as Dialog from '@radix-ui/react-dialog'

function App() {
  return (
    <div className="p-6 text-center">
      <Dialog.Root>
        <Dialog.Trigger className="px-4 py-2 bg-blue-600 text-white rounded">Abrir diálogo</Dialog.Trigger>
        <Dialog.Content className="p-6 bg-white rounded shadow">
          <p>¡Hola desde Radix UI!</p>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  )
}

export default App
