import tagsss from './tags.js'
let tags = tagsss

const TagController = (app) => {
    app.get('/api/tags', findTags);
    app.get('/api/tags/:tid', findTagById);
    app.post('/api/tags', createTag);
}

const findTags = (req, res) => {
  res.json(tags)
}

const findTagById = (req, res) => {
  const tagId = req.params.tid;
  const tag = tags
    .find(t => t._id === tagId);
  res.json(tag);
}

const createTag = (req, res) => {
  const newTag = req.body;
  newTag._id = (new Date()).getTime() + '';
  tags.push(newTag);
  res.json(newTag);
}


export default TagController