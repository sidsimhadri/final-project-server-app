const HelloController = (app) => {
  app.get('/hello', (req, res) => {
    res.send('wawaweeea')
  })
  app.get('/', (req, res) => {
    res.send('Final Project Backend!')
  })
}
export default HelloController;