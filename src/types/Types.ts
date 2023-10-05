export interface Todos {
    id: number
    text: string
    completed: boolean
}

export type ActiveFilter = 'All' | 'Active' | 'Done'
