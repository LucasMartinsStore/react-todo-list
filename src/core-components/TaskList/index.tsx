import PlusIcon from "../../assets/icons/Plus-Regular.svg?react";
import Button from "../../components/Button";
import { TaskItem } from "../TaskItem";

export function TaskList() {
  return (
    <>
      <section>
        <Button className="w-full" icon={PlusIcon}>
          Nova Tarefa
        </Button>
      </section>
      <section className="space-y-2">
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </section>
    </>
  );
}
