var program = require("commander");

program
  .version("0.0.1")
  .option("-s, --smtp-port [number]", "SMTP server port (1025 by default).")
  .option("-p, --http-port [number]", "HTTP server port (8080 by default).")
  .option("-q, --quiet", "Do not dump mails to the console (false by default).")
  .option("-w, --whitelist [value]", "Aceppt mails from these adresses only (no whitelist by default).", collect, [])
  .option("-m --max [number]", "Max number of e-mails to keep (200 by default)")
  .parse(process.argv);

function collect(val, memory) {
  memory.push(val);
  return memory;
}

var config = {
	smtpPort: program.smtpPort || 1025,
	httpPort: program.httpPort || 8080,
	dumpFiles: program.dumpFiles || true,
	dumpDir: program.dumpDir || "./",
    whitelist: program.whitelist || [],
    quiet: program.quiet || false,
    maxEmails: program.max || 200
};

module.exports = {
	config: config
};