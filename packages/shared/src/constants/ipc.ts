type Prop = { [key: string]: string }

const sync: Prop = {
  syncDummy: 'syncDummy'
}

const async: Prop = {
  asyncDummy: 'asyncDummy'
}

export const ipc = {
  async,
  sync
}
