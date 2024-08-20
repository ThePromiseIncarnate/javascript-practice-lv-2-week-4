
// Welcome to the Array Building and For Loop Practice Exercise!
// In this exercise, you'll build arrays using the `push` method and interact with them using a for loop.
// You'll be using factory functions to create objects and methods to manipulate those objects.

// TODO: First, familiarize yourself with the two factory functions provided below:

// Factory function to create a book
function createBook(title, author) {
    return {
        title,
        author,
        showDetails() {
            console.log(`"${this.title}" by ${this.author}`);
        }
    };
}

// Factory function to create a task
function createTask(description, dueDate) {
    return {
        description,
        dueDate,
        completed: false,
        completeTask() {
            this.completed = true;
            console.log(`Task "${this.description}" is now completed.`);
        }
    };
}

// Now, let's move on to the exercises!

// EXERCISE 1: Building a Book Collection
// INSTRUCTIONS: Create an empty array called `bookCollection`.
// Use the `push` method to add 3 books to the array using the `createBook` factory function.
// Then, use a for loop to display the details of each book using the `showDetails` method.

// EXAMPLE:
// const exampleBookCollection = [];
// exampleBookCollection.push(createBook('Pride and Prejudice', 'Jane Austen'));
// exampleBookCollection.push(createBook('1984', 'George Orwell'));
// exampleBookCollection.push(createBook('To Kill a Mockingbird', 'Harper Lee'));

// for (let i = 0; i < exampleBookCollection.length; i++) {
//     exampleBookCollection[i].showDetails();
// }

// TODO: Now, you try building your own book collection with different books!

const bookCollection = [];
bookCollection.push(createBook('Hunger Games', 'Suzanne Collins'));
bookCollection.push(createBook('The Giver', 'Lewis Lowry'));
bookCollection.push(createBook('Wolf Children', 'Mamoru Hosoda'));

for (let i = 0; i < bookCollection.length; i++) {
    bookCollection[i].showDetails();
}

// EXERCISE 2: Managing a Task List
// INSTRUCTIONS: Create an empty array called `taskList`.
// Use the `push` method to add 3 tasks to the array using the `createTask` factory function.
// Then, use a for loop to mark each task as completed using the `completeTask` method.

// EXAMPLE:
// const exampleTaskList = [];
// exampleTaskList.push(createTask('Write a report', '2024-08-30'));
// exampleTaskList.push(createTask('Grocery shopping', '2024-08-31'));
// exampleTaskList.push(createTask('Call the bank', '2024-09-01'));

// for (let i = 0; i < exampleTaskList.length; i++) {
//     exampleTaskList[i].completeTask();
// }

// TODO: Now, you try building your own task list and marking each task as completed!

const taskList = [];
taskList.push(createTask('Go to lunch', '2024-08-20'));
taskList.push(createTask('Eidoloid Session', '2024-08-24'));
taskList.push(createTask('Day of Remembrance for my Brother', '2024-08-28'));

for (let i = 0; i < taskList.length; i++) {
    taskList[i].completeTask();
}

// EXERCISE 3: Updating Book Titles
// INSTRUCTIONS: Create an empty array called `library`.
// Use the `push` method to add 3 books to the array using the `createBook` factory function.
// Then, use a for loop to update the title of each book by adding " - Second Edition" to the end of the title.

// EXAMPLE:
// const exampleLibrary = [];
// exampleLibrary.push(createBook('The Great Gatsby', 'F. Scott Fitzgerald'));
// exampleLibrary.push(createBook('Brave New World', 'Aldous Huxley'));
// exampleLibrary.push(createBook('Moby Dick', 'Herman Melville'));

// for (let i = 0; i < exampleLibrary.length; i++) {
//     exampleLibrary[i].title += ' - Second Edition';
//     exampleLibrary[i].showDetails(); // Showing the updated title
// }

// TODO: Now, you try updating the titles of your own library!

const library = [];
library.push(createBook('Hunger Games', 'Suzanne Collins'));
library.push(createBook('The Giver', 'Lewis Lowry'));
library.push(createBook('Wolf Children', 'Mamoru Hosoda'));

for (let i = 0; i < library.length; i++) {
    library[i].title += ' - Second Edition';
    library[i].showDetails(); // Showing the updated title
}

// EXERCISE 4: Rescheduling Tasks
// INSTRUCTIONS: Create an empty array called `taskList`.
// Use the `push` method to add 3 tasks to the array using the `createTask` factory function.
// Then, use a for loop to reschedule each task by changing its due date to one day later.

// EXAMPLE:
// const exampleTaskList = [];
// exampleTaskList.push(createTask('Finish project', '2024-09-10'));
// exampleTaskList.push(createTask('Visit the dentist', '2024-09-11'));
// exampleTaskList.push(createTask('Submit assignment', '2024-09-12'));

// for (let i = 0; i < exampleTaskList.length; i++) {
//     let oldDate = new Date(exampleTaskList[i].dueDate);
//     let newDate = new Date(oldDate.setDate(oldDate.getDate() + 1));
//     exampleTaskList[i].dueDate = newDate.toISOString().split('T')[0];
//     console.log(`New due date for "${exampleTaskList[i].description}": ${exampleTaskList[i].dueDate}`);
// }

// TODO: Now, you try rescheduling your own tasks!

const exampleTaskList = [];
exampleTaskList.push(createTask('Eidoloid Session', '2024-08-24'));
exampleTaskList.push(createTask('SoE Session', '2024-08-25'));
exampleTaskList.push(createTask('Game Night', '2024-08-30'));

for (let i = 0; i < exampleTaskList.length; i++) {
    let oldDate = new Date(exampleTaskList[i].dueDate);
    let newDate = new Date(oldDate.setDate(oldDate.getDate() + 1));
    exampleTaskList[i].dueDate = newDate.toISOString().split('T')[0];
    console.log(`New due date for "${exampleTaskList[i].description}": ${exampleTaskList[i].dueDate}`);
}

// EXERCISE 5: Counting Completed Tasks
// INSTRUCTIONS: Create an empty array called `taskList`.
// Use the `push` method to add 3 tasks to the array using the `createTask` factory function.
// Use a for loop to mark only 2 tasks as completed. Then, use another for loop to count and display
// how many tasks have been completed.

// EXAMPLE:
// const exampleTaskList = [];
// exampleTaskList.push(createTask('Clean the house', '2024-09-15'));
// exampleTaskList.push(createTask('Pay electricity bill', '2024-09-16'));
// exampleTaskList.push(createTask('Prepare presentation', '2024-09-17'));

// exampleTaskList[0].completeTask(); // Mark first task as completed
// exampleTaskList[2].completeTask(); // Mark third task as completed

// let completedCount = 0;
// for (let i = 0; i < exampleTaskList.length; i++) {
//     if (exampleTaskList[i].completed) {
//         completedCount++;
//     }
// }
// console.log(`Number of completed tasks: ${completedCount}`);

// TODO: Now, you try counting the completed tasks in your own task list!

const taskList0 = [];
taskList0.push(createTask('Go to lunch', '2024-08-20'));
taskList0.push(createTask('SoE Session', '2024-08-25'));
taskList0.push(createTask('Game Night', '2024-08-30'));

taskList0[0].completeTask(); // Mark first task as completed
taskList0[2].completeTask(); // Mark third task as completed

let completedCount = 0;
for (let i = 0; i < taskList0.length; i++) {
    if (taskList0[i].completed) {
        completedCount++;
    }
}
console.log(`Number of completed tasks: ${completedCount}`);

// Great job! You've completed the exercises.
// Feel free to experiment further with the factory functions and loops to create more complex arrays and interactions.
