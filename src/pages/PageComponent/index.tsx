import { Text } from "../../components/Text";
import { Icon } from "../../components/Icon";
import { Badge } from "../../components/Bagde";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Input } from "../../components/Input";
import { CheckBox } from "../../components/Checkbox";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Skeleton } from "../../components/Skeleton";

import TrashIcon from "../../assets/icons/Trash-Regular.svg?react";
import CheckIcon from "../../assets/icons/Check-Regular.svg?react";
import PencilIcon from "../../assets/icons/PencilSimple-Regular.svg?react";
import PlusIcon from "../../assets/icons/Plus-Regular.svg?react";
import SpinnerIcon from "../../assets/icons/Spinner.svg?react";
import XIcon from "../../assets/icons/X-Regular.svg?react";

export function PageComponent() {
  return (
    <Container>
      <div className="grid gap-10">
        <div className="flex flex-col gap-2">
          <Text variant="body-md-bold" className="text-pink-base">
            Hello World!
          </Text>
          <Text className="text-green-base">Hello World!</Text>
          <Text variant="body-md-bold">Hello World!</Text>
          <Text>Levar o dog para passear</Text>
        </div>
        <div className="flex  gap-1">
          <Icon svg={TrashIcon} className="fill-green-base" />
          <Icon svg={CheckIcon} />
          <Icon svg={PencilIcon} />
          <Icon svg={PlusIcon} />
          <Icon animate svg={SpinnerIcon} />
          <Icon svg={XIcon} />
        </div>
        <div className="flex gap-1">
          <Badge variant="primary">2 de 5</Badge>
          <Badge variant="secondary">5</Badge>
          <Badge loading variant="secondary">
            5
          </Badge>
        </div>
        <div className="flex gap-1">
          <ButtonIcon icon={TrashIcon} disabled />
          <ButtonIcon icon={TrashIcon} variant="secondary" />
          <ButtonIcon icon={TrashIcon} variant="tertiary" />
          <ButtonIcon icon={TrashIcon} loading />
        </div>
        <div className="flex gap-1">
          <Input type="text" />
        </div>
        <div className="flex gap-1">
          <CheckBox />
          <CheckBox loading />
        </div>
        <div className="flex gap-1">
          <Card size={"md"}>Hello world! </Card>
        </div>
        <div className="space-y-2">
          <Skeleton className="h-6" />
          <Skeleton className="h-6" />
          <Skeleton className="w-96 h-6" />
        </div>
      </div>
    </Container>
  );
}
