const faunadb = require('faunadb')

const handler = async (event) => {
  const q = faunadb.query
  const client = new faunadb.Client({
    secret: 'fnAEKN1rNAACB66g7lgKdTQ9Z16l5fE1KTEYxmfR',
  })
  const { slug } = event.queryStringParameters
  console.log(slug)
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
  console.log(doesDocExist)
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
  console.log(document.data.hits)
  return {
    statusCode: 200,
    body: JSON.stringify({
      hits: document.data.hits,
    }),
  }
}

;(async function () {
  await handler({
    queryStringParameters: { slug: 'understanding-layouts-with-css-grid' },
  })
})()
