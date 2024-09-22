const socket = io()

const textEditor = document.getElementById('editor-texto')

textEditor.addEventListener('keyup', () => {
  socket.emit('typing_document', textEditor.value)
})

socket.on('sharing_document_data', (text) => {
  textEditor.value = text
})