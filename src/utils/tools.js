const tools = {
  /**
   * @desc Normalize a port into a number, string, or false.
   * @author Jonny Wei
   * @date 2020/5/11
   */
  normalizePort(val) {
    const port = parseInt(val, 10);
    if (Number.isNaN(port)) {
      // named pipe
      return val;
    }
    if (port >= 0) {
      // port number
      return port;
    }
    return false;
  },

};

module.exports = tools;
