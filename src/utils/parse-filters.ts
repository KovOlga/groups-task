export const parseIsClosed = (type: string) => {
  switch (type) {
    case "all":
      return null;
    case "closed":
      return true;
    case "opened":
      return false;
  }
};

export const parseHasFriends = (type: string) => {
  switch (type) {
    case "all":
      return null;
    case "present":
      return true;
    case "absent":
      return false;
  }
};
