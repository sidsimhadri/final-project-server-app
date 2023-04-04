const HelloController = (app) => {
  app.get('/hello', (req, res) => {
    res.send('wawaweeea')
  })
  app.get('/', (req, res) => {
    res.send('IS4800-backend!')
  })
}
export default HelloController;