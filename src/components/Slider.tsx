import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { motion, PanInfo, useDragControls, DragControls } from "framer-motion";

const SliderWrapper = styled(motion.div)`
  font-family: "Quicksand", sans-serif;
  color: white;
  font-size: 1.6rem;
`;

const Label = styled(motion.div)`
  margin-top: 2rem;
  margin-bottom: 0.5rem;
`;

const TrackWrapper = styled(motion.div)`
  width: 100%;
  padding: 0.4rem;
  border-radius: 0.2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
`;

const Track = styled(motion.div)``;

const Knob = styled(motion.div)`
  width: 3rem;
  height: 3rem;
  box-sizing: border-box;
  border-radius: 0.2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  line-height: 3rem;
  font-size: 1rem;
  background: linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
`;

interface ISliderProps {
  label: string;
  min: number;
  max: number;
}

function Slider(props: ISliderProps) {
  const trackRef: any = useRef(null);
  const knobRef: any = useRef(null);

  const [trackConstraint, setTrackConstraint] = useState<number>(100);
  const [value, setValue] = useState<number>(0);
  const [scaledValue, setScaledValue] = useState<number>(0);

  useEffect(() => {
    if (trackRef) {
      setTrackConstraint(
        trackRef.current.offsetWidth - knobRef.current.offsetWidth
      );
    }
  }, [trackRef, knobRef]);

  const onDrag = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (trackRef && knobRef) {
      const newValue = info.point.x / trackConstraint;
      const newScaledValue = Math.round(
        props.min + (props.max - props.min) * newValue
      );
      setValue(newValue);
      setScaledValue(newScaledValue);
    }
  };

  return (
    <SliderWrapper>
      <Label>{props.label}</Label>
      <TrackWrapper>
        <Track ref={trackRef}>
          <Knob
            ref={knobRef}
            drag
            dragMomentum={false}
            dragConstraints={{
              left: 0,
              top: 0,
              bottom: 0,
              right: trackConstraint,
            }}
            dragElastic={0}
            onDrag={onDrag}
          >
            {scaledValue}
          </Knob>
        </Track>
      </TrackWrapper>
    </SliderWrapper>
  );
}

export default Slider;
