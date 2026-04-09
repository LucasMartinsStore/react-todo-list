import { Badge } from "../../components/Bagde";
import { Text } from "../../components/Text";
export function TaskSummary() {
  return (
    <>
      <div className="flex items-center  gap-2">
        <Text className="text-gray-300!" variant={"body-sm-bold"}>
          Tarefas Criadas
        </Text>
        <Badge variant={"secondary"}>5</Badge>
      </div>
      <div className="flex items-center  gap-2">
        <Text className="text-gray-300!" variant={"body-sm-bold"}>
          Concluídas
        </Text>
        <Badge variant={"primary"}>2 de 5</Badge>
      </div>
    </>
  );
}
