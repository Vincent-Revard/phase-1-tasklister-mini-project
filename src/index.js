document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('#create-task-form')
  const description = document.querySelector('#new-task-description')
  const ul = document.querySelector('#tasks')


  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const task = description.value
    const li = document.createElement('li')
    li.innerText = task

    const button = document.createElement('button')
    button.innerText = ' x'
    button.addEventListener('click', (e) => li.remove())
    li.append(button)
    ul.append(li)
    e.target.reset()
  })
});





// const submitBtn = document.querySelector("#create-task-form input[type=submit]:nth-child(3)")
//   console.log(submitBtn)


//! JS NEEDS TO DO THIS !//
// As a user, I should be able to type a task into the input field.
// As a user, I should be able to click some form of a submit button.
// As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.