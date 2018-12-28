export const schema = {
  "type": "object",
  "properties": {
    "users": {
      "type": "array",
      "minItems": 3,
      "maxItems": 5,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "firstName": {
            "type": "string",
            "maximum": 20
          },
          "lastName": {
            "type": "string",
            "maximum": 20
          },
          "email": {
            "type": "string",
            "maximum": 40
          }
        },
        "required": ["id", "firstName", "lastName", "email"]
      }
    }
  },
  "required": ["users"]
};
