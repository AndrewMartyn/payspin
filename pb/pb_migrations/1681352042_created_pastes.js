migrate((db) => {
  const collection = new Collection({
    "id": "jscdvzlb034xyvp",
    "created": "2023-04-13 02:14:02.087Z",
    "updated": "2023-04-13 02:14:02.087Z",
    "name": "pastes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pl0fmkkh",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "oivu0o9x",
        "name": "content",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("jscdvzlb034xyvp");

  return dao.deleteCollection(collection);
})
