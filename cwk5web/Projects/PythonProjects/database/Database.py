import sqlite3
conn = sqlite3.connect("rio_olympics.db")
cur = conn.cursor()
columns = []

def get_columns():
    cur.execute("PRAGMA table_info(athletes);")
    for row in cur:
        columns.append(row[1])

def print_columns():
    print("The columns in the table are: " + " ".join(col for col in columns) )
    
get_columns()
print_columns()
