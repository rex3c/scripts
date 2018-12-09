import sys

def convert_str_hex(process_str):
	print "0x" + "0x".join("{:02x}".format(ord(c)) for c in process_str)
	
process_str = sys.argv[1]
cmd_ = sys.argv[2]

if process_str is None:
	print "no input passed. usage util.py input cmd[str2hex,..]"

if cmd_ is None:
	print "no cmd passed. usage util.py input cmd[str2hex,..]"

if cmd_ == 'str2hex':
	convert_str_hex(process_str)
else:
	print "wrong cmd passed. usage util.py input cmd[str2hex,..]"
	

