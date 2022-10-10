import { Task } from '@prisma/client'
import { FC } from 'react'
import { useStore } from '../store'
import { useMutateTask } from '../hooks/useMutateTAsk'
import { List } from '@mantine/core'
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid'

type Props = Omit<Task, 'createdAt' | 'updatedAt' | 'userId'>

export const TaskItem: FC<Props> = ({ id, title, description }) => {
  const update = useStore((state) => state.updateEditedTask)
  const { deleteTaskMutation } = useMutateTask()

  return (
    <List.Item>
      <div className="float-left mr-10">
        <PencilAltIcon
          className="mx-1 h-5 w-5 cursor-pointer text-blue-500"
          onClick={() => update({ id, title, description })}
        />
        <TrashIcon
          className="h-5 w-5 cursor-pointer text-blue-500"
          onClick={() => {
            deleteTaskMutation.mutate(id)
          }}
        />
      </div>
      <span>{title}</span>
    </List.Item>
  )
}
