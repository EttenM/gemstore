"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/src/shared/lib/utils";

type SliderProps = {
  // defaultValue: number[];
  className?: string;
  min: number;
  max: number;
  // minStepsBetweenThumbs: number;
  step: number;

  value?: number[] | readonly number[];
  onValueChange?: (values: number[]) => void;
};

const Slider = React.forwardRef(
  (
    {
      className,
      min,
      max,
      step,

      value,
      onValueChange,
      ...props
    }: SliderProps,
    ref
  ) => {
    const initialValue = Array.isArray(value) ? value : [min, max];
    const [localValues, setLocalValues] = React.useState(initialValue);

    const handleValueChange = (newValues: number[]) => {
      setLocalValues(newValues);
      if (onValueChange) {
        onValueChange(newValues);
      }
    };
    React.useEffect(() => {
      // Update localValues when the external value prop changes
      setLocalValues(Array.isArray(value) ? value : [min, max]);
    }, [min, max, value]);

    return (
      <SliderPrimitive.Root
        ref={ref as React.RefObject<HTMLDivElement>}
        min={min}
        max={max}
        step={step}
        value={localValues}
        onValueChange={handleValueChange}
        className={cn(
          "relative flex w-full touch-none select-none items-center",
          className
        )}
        {...props}
      >
        <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-accent">
          <SliderPrimitive.Range className="absolute h-full bg-foreground" />
        </SliderPrimitive.Track>
        {localValues.map((value, index) => (
          <React.Fragment key={index}>
            <div
              className="absolute text-center"
              style={{
                left: `calc(${((value - min) / (max - min)) * 94}% + 0px)`,
                top: `10px`,
              }}
            >
              <span className="text-xs">{value}</span>
            </div>
            <SliderPrimitive.Thumb
              className="block h-4 w-4 rounded-full border-[1.5px] border-foreground bg-background shadow transition-colors 
            focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            />
          </React.Fragment>
        ))}
      </SliderPrimitive.Root>
    );
  }
);

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
