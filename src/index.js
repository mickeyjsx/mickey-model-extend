function mergeArray(target, source, key) {
  const arr = source[key]
  if (arr) {
    if (!target[key]) {
      target[key] = []
    }

    if (Array.isArray(arr)) {
      target[key].push(...arr)
    } else {
      target[key].push(arr)
    }
  }
}

export default function modelExtend(...models) {
  return models.reduce((memo, model) => {
    const {
      namespace,
      state,
      subscriptions,
      createReducer,
      enhancers,
      ...reducers
    } = model

    // namespace
    if (namespace) {
      memo.namespace = namespace
    }

    // state
    if (typeof state === 'object' && !Array.isArray(state)) {
      memo.state = {
        ...memo.state,
        ...state,
      }
    } else if ('state' in model) {
      memo.state = state
    }

    mergeArray(memo, model, 'subscriptions')
    mergeArray(memo, model, 'enhancers')

    // createReducer
    if (createReducer) {
      memo.createReducer = createReducer
    }

    return {
      ...memo,
      ...reducers,
    }
  }, {})
}
