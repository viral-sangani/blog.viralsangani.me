const faunadb = require('faunadb')

exports.handler = async (event) => {
  const q = faunadb.query
  const client = new faunadb.Client({
    secret: 'fnAEKN1rNAACB66g7lgKdTQ9Z16l5fE1KTEYxmfR',
  })
  const { slug } = event.queryStringParameters
  if (!slug) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Article slug not provided',
      }),
    }
  }
  // Check and see if the doc exists.
  const doesDocExist = await client.query(
    q.Exists(q.Match(q.Index('hits_by_slug'), slug))
  )
  if (!doesDocExist) {
    await client.query(
      q.Create(q.Collection('metadata'), {
        data: { slug: slug, hits: 0, likes: 0 },
      })
    )
  }
  // Fetch the document for-real
  const document = await client.query(
    q.Get(q.Match(q.Index('hits_by_slug'), slug))
  )
  await client.query(
    q.Update(document.ref, {
      data: {
        hits: document.data.hits + 1,
      },
    })
  )
  return {
    statusCode: 200,
    body: JSON.stringify({
      hits: document.data.hits,
    }),
  }
}
