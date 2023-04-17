migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jscdvzlb034xyvp")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jicsmf4m",
    "name": "slug",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 8,
      "max": 8,
      "pattern": "[A-Za-z]"
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jscdvzlb034xyvp")

  // update
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
})
