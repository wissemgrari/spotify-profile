// Transform Pitch Class Notation to string
export const parsePitchClass = (key: number) => {
  let note= "";

  switch (key) {
    case 0:
      note = 'C';
      break;
    case 1:
      note = 'D♭';
      break;
    case 2:
      note = 'D';
      break;
    case 3:
      note = 'E♭';
      break;
    case 4:
      note = 'E';
      break;
    case 5:
      note = 'F';
      break;
    case 6:
      note = 'G♭';
      break;
    case 7:
      note = 'G';
      break;
    case 8:
      note = 'A♭';
      break;
    case 9:
      note = 'A';
      break;
    case 10:
      note = 'B♭';
      break;
    case 11:
      note = 'B';
      break;
    default:
      return null;
  }
  return note;
};
