function ValidURL(url: string): boolean {
  try {
    const valid = Boolean(new URL(url));
    if (valid) {
      const u = new URL(url);
      if (!u) {
        return false;
      }
      if (u.host == "") {
        return false;
      }
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
}

export default ValidURL;
