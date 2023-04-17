migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jscdvzlb034xyvp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jicsmf4m",
    "name": "slug",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jscdvzlb034xyvp")

  // remove
  collection.schema.removeField("jicsmf4m")

  return dao.saveCollection(collection)
})
