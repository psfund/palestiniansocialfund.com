import AsyncAirtable from "asyncairtable";

const asyncAirtable = new AsyncAirtable(
  process.env.AIRTABLE_API_KEY,
  process.env.AIRTABLE_BASE
);

export default asyncAirtable;
