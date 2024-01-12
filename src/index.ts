import 'module-alias/register';

import buildServer from "./server";

const server = buildServer();

server.listen({ port: 3000 }, function (err, address) {
    if (err) {
        server.log.error(err)
      process.exit(1)
    }
  })