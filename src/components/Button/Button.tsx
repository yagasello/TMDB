"use client";

import React, { FC } from "react";
import "./Button.scss";

import { BaseComponentProps } from "../../types/base";
import { ButtonType } from "./buttonType";
import Image from "next/image";
import block from "bem-cn";

interface Props extends BaseComponentProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: string;
  htmlType?: "submit" | "reset" | "button";
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  contentStart?: boolean;
  purpleText?: boolean;
}

const b = block("button");

export const Button: FC<Props> = ({
  style,
  onClick = () => {},
  type = ButtonType.Fulfilled,
  htmlType,
  disabled = false,
  startIcon,
  endIcon,
  children,
  contentStart,
  purpleText,
}) => (
  <button
    className={`${b({ [type]: true, flexStart: contentStart, purpleText: purpleText })}`}
    onClick={onClick}
    disabled={disabled}
    style={style}
    type={htmlType}
  >
    {startIcon && (
      <Image className={b("icon")} alt="plus one" src={startIcon} />
    )}
    <span>{children}</span>
    {endIcon && (
      <Image
        className={b("icon", { end: true })}
        alt="minus one"
        src={endIcon}
      />
    )}
  </button>
);
