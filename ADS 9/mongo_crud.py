from pymongo import MongoClient
import tkinter as tk

class Application(tk.Frame):
    def _init_(self, master=None):
        super()._init_(master)
        self.master = master
        self.master.title("MongoDB CRUD Application")
        self.pack()

        # Create a MongoClient object to connect with the MongoDB server
        self.client = MongoClient()
        # Connect to the 'testdb' database
        self.db = self.client['testdbs']
        # Create a 'users' collection
        self.users = self.db['users']

        # Create labels and entry fields for user details
        self.name_label = tk.Label(self, text="Name:")
        self.name_label.grid(row=0, column=0)
        self.name_entry = tk.Entry(self)
        self.name_entry.grid(row=0, column=1)
        self.email_label = tk.Label(self, text="Email:")
        self.email_label.grid(row=1, column=0)
        self.email_entry = tk.Entry(self)
        self.email_entry.grid(row=1, column=1)

        # Create buttons for CRUD operations
        self.create_button = tk.Button(self, text="Create", command=self.create_user)
        self.create_button.grid(row=2, column=0)
        self.read_button = tk.Button(self, text="Read", command=self.read_user)
        self.read_button.grid(row=2, column=1)
        self.update_button = tk.Button(self, text="Update", command=self.update_user)
        self.update_button.grid(row=2, column=2)
        self.delete_button = tk.Button(self, text="Delete", command=self.delete_user)
        self.delete_button.grid(row=2, column=3)

        # Create a text box to display user details
        self.text_box = tk.Text(self, height=10, width=50)
        self.text_box.grid(row=3, columnspan=4)

    def create_user(self):
        # Insert a new user
        user = {'name': self.name_entry.get(), 'email': self.email_entry.get()}
        self.users.insert_one(user)
        self.text_box.delete("1.0", tk.END)
        self.text_box.insert(tk.END, "User created:\n" + str(user))

    def read_user(self):
        # Find a user by email
        found_user = self.users.find_one({'email': self.email_entry.get()})
        self.text_box.delete("1.0", tk.END)
        if found_user:
            self.text_box.insert(tk.END, "User found:\n" + str(found_user))
        else:
            self.text_box.insert(tk.END, "User not found")

    def update_user(self):
        # Update a user
        result = self.users.update_one({'email': self.email_entry.get()}, {'$set': {'name': self.name_entry.get()}})
        self.text_box.delete("1.0", tk.END)
        if result.modified_count > 0:
            self.text_box.insert(tk.END, "User updated")
        else:
            self.text_box.insert(tk.END, "User not found")

    def delete_user(self):
        # Delete a user
        result = self.users.delete_one({'email': self.email_entry.get()})
        self.text_box.delete("1.0", tk.END)
        if result.deleted_count > 0:
            self.text_box.insert(tk.END, "User deleted")
        else:
            self.text_box.insert(tk.END, "User not found")

root = tk.Tk()
app = Application(master=root)
app.mainloop()
