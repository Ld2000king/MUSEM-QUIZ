// The gallery room itself: walnut walls, a parquet floor and brass fittings,
// drawn with the same geometry the vanilla build used so the space reads the
// same. preserveAspectRatio="none" lets it stretch to whatever height the
// phone leaves for the room.
import React from 'react';
import Svg, {Defs, LinearGradient, Stop, Path, G} from 'react-native-svg';
import {rooms, colors} from '../theme.js';

export default function RoomScene({theme}) {
  const room = rooms[theme] || rooms.dark;
  return (
    <Svg style={{width: '100%', height: '100%'}} viewBox="0 0 480 440" preserveAspectRatio="none">
      <Defs>
        <LinearGradient id="wallL">
          <Stop stopColor={room.wall1} />
          <Stop offset="1" stopColor={room.wall2} />
        </LinearGradient>
        <LinearGradient id="wallR">
          <Stop stopColor={room.wall3} />
          <Stop offset="1" stopColor={room.wall4} />
        </LinearGradient>
        <LinearGradient id="stone" x2="0" y2="1">
          <Stop stopColor={room.floor1} />
          <Stop offset="1" stopColor={room.floor2} />
        </LinearGradient>
        <LinearGradient id="door" x2="1" y2="1">
          <Stop stopColor={colors.brass} />
          <Stop offset="1" stopColor={colors.brassLight} />
        </LinearGradient>
      </Defs>

      <Path fill={room.base} d="M0 0H480V440H0Z" />
      <Path fill={room.ceiling} d="M0 0H480L440 50H40Z" />
      <Path fill="url(#wallL)" d="M0 0L40 50V312L0 440Z" />
      <Path fill="url(#wallR)" d="M480 0L440 50V312L480 440Z" />
      <Path fill="url(#stone)" d="M40 312H440L480 440H0Z" />

      {/* floorboards and the line where the walls meet the floor */}
      <G fill="none" stroke={room.grid}>
        <Path d="M40 312H440M0 370H480M0 425H480M130 312L66 440M240 312V440M350 312L414 440" />
      </G>

      {/* brass corner posts */}
      <Path fill={colors.brassLight} d="M38 50H42V314H38ZM438 50H442V314H438Z" />

      {/* the doorway through to the next room, and a wall vitrine opposite */}
      <Path fill="url(#door)" d="M450 154L476 136V362L450 318Z" />
      <Path fill={colors.brass} d="M450 318L476 310V362Z" />
      <Path fill={colors.brassLight} d="M454 156L458 153V319L454 316Z" />
      <Path fill={colors.brass} d="M6 122L28 140V239L6 240Z" />
      <Path fill={colors.brassLight} d="M11 168L24 159V204L11 216Z" />

      {/* cornice, picture lights and the light they throw down the wall */}
      <G stroke={room.cornice} strokeWidth="3">
        <Path d="M75 30H405" />
      </G>
      <G fill={room.fixture}>
        <Path d="M112 29H127V38H112ZM239 29H254V38H239ZM353 29H368V38H353Z" />
      </G>
      <G fill={room.glow}>
        <Path d="M113 38H127L165 134H70Z" />
        <Path d="M353 38H367L406 134H310Z" />
      </G>
    </Svg>
  );
}
