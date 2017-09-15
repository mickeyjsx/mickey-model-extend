import { expect } from 'chai'
import extendModel from '../src/index'

describe('extendModel', () => {
  it('should override `namesapce`', () => {
    const model = extendModel({ namespace: 'foo' }, { namespace: 'bar' })
    expect(model.namespace).to.be.eql('bar')
  })

  it('should override `createReducer`', () => {
    const model = extendModel({ createReducer: 'foo' }, { createReducer: 'bar' })
    expect(model.createReducer).to.be.eql('bar')
  })

  it('should merge states when they are objects', () => {
    const model = extendModel({
      state: {
        name: 'Benjy',
      },
    }, {
      state: {
        age: 18,
      },
    })
    expect(model.state).to.be.eql({
      name: 'Benjy',
      age: 18,
    })
  })

  it('should override state when the source `state` is not an object', () => {
    const model = extendModel({
      state: {
        name: 'Benjy',
      },
    }, {
      state: 18,
    })

    expect(model.state).to.be.eql(18)
  })

  it('should override state when the source `state` is an array', () => {
    const model = extendModel({
      state: {
        name: 'Benjy',
      },
    }, {
      state: [1],
    })

    expect(model.state).to.be.eql([1])
  })

  it('shoule merge `subscriptions` when target `subscriptions` is null and source `subscriptions` is a function', () => {
    const fn = f => f
    const model = extendModel({}, {
      subscriptions: fn,
    })

    expect(model.subscriptions).to.be.eql([fn])
  })

  it('shoule merge `subscriptions` when target `subscriptions` is null and source `subscriptions` is an array', () => {
    const fn = f => f
    const model = extendModel({}, {
      subscriptions: [fn],
    })

    expect(model.subscriptions).to.be.eql([fn])
  })

  it('shoule merge `subscriptions` when source and target `subscriptions` are both functions', () => {
    const fn1 = f => f
    const fn2 = f => f
    const model = extendModel({
      subscriptions: fn1,
    }, {
      subscriptions: fn2,
    })

    expect(model.subscriptions).to.be.eql([fn1, fn2])
  })

  it('shoule merge `subscriptions` when source and target `subscriptions` are both arrays', () => {
    const fn1 = f => f
    const fn2 = f => f
    const model = extendModel({
      subscriptions: [fn1],
    }, {
      subscriptions: [fn2],
    })

    expect(model.subscriptions).to.be.eql([fn1, fn2])
  })
})
