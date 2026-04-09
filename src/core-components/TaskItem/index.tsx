import { ButtonIcon } from "../../components/ButtonIcon";
import { Card } from "../../components/Card";
import { CheckBox } from "../../components/Checkbox";
import { Text } from "../../components/Text";
import { useState } from "react";

import TrashIcon from "../../assets/icons/Trash-Regular.svg?react";
import PencilIcon from "../../assets/icons/PencilSimple-Regular.svg?react";
import XIcon from "../../assets/icons/X-Regular.svg?react";
import CheckIcon from "../../assets/icons/Check-Regular.svg?react";
import { Input } from "../../components/Input";

export function TaskItem() {
  const [isEditing, setIsEditing] = useState(false);

  function handleToEdit() {
    setIsEditing(true);
  }
  function handleToExitEdit() {
    setIsEditing(false);
  }
  return (
    <Card size="md" className="flex items-center gap-4">
      {!isEditing ? (
        <>
          <CheckBox />
          <Text className="flex-1">Fazer compras para semana</Text>
          <div className="flex gap-1">
            <ButtonIcon icon={TrashIcon} variant={"tertiary"} />
            <ButtonIcon
              icon={PencilIcon}
              variant={"tertiary"}
              onClick={handleToEdit}
            />
          </div>
        </>
      ) : (
        <>
          <Input className="flex-1" />
          <div className="flex gap-1">
            <ButtonIcon
              icon={XIcon}
              variant={"secondary"}
              onClick={handleToExitEdit}
            />
            <ButtonIcon icon={CheckIcon} variant={"primary"} />
          </div>
        </>
      )}
    </Card>
  );
}
