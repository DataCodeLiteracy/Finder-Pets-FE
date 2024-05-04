"use client";
import * as s from "./WriterButtonStyle.css";

import { Flex } from "@design-system/react-components-layout";
import { Button } from "@design-system/react-components-button";

import { PiPencilSimpleBold } from "react-icons/pi";
import { usePathname } from "next/navigation";

const WRITE_BUTTON_INCLUDES_PATHS = [
  "/finder/lost",
  "finder/sighted",
  "community/reunion-reviews",
  "community/pet-stories",
];

const WriterButton = () => {
  const path = usePathname();

  if (!WRITE_BUTTON_INCLUDES_PATHS.includes(path)) return null;

  return (
    <div className={s.writerButtonWrap}>
      <Button className={s.buttonStyle}>
        <Flex direction="column" justify="center" align="center">
          <PiPencilSimpleBold className={s.iconStyle} />
          <span className={s.buttonText}>글쓰기</span>
        </Flex>
      </Button>
    </div>
  );
};

export default WriterButton;
