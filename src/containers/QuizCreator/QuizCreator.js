import React, {Component} from 'react'
import classes from './QuizCreator.module.css'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/input/input'
import {createControl} from '../../form/formFramework'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'

function createOptionControl(number) {
  return createControl({
    label: `variant ${number}`,
    errorMessage: 'value is not wiil be empty',
    id: number
  }, {required: true})
}

function createFormControls() {
  return {
    question: createControl({
      label: 'enter question',
      errorMessage: 'question is not will be empty'
    }, {required: true}),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4)
  }
}

export default class QuizCreator extends Component {

  state = {
    quiz: [],
    formControls: createFormControls()
  }

  sibmitHandler = event => {
    event.preventDefault()
  }

  addQuestionHandler = () => {

  }

  createQuizHandler = () => {

  }

  changeHandler = (value, controlName) => {

  }

  renderControls() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName]

      return (
        <Auxiliary key={controlName + index}>
          <Input
            label={control.label}
            value={control.value}
            valid={control.valid}
            shouldValidate={!!control.validation}
            touched={control.touched}
            errorMessage={control.errorMessage}
            onChange={event => this.changeHandler(event.target.value, controlName)}
          />
          { index === 0 ? <hr /> : null }
        </Auxiliary>
      )
    })
  }

  render() {
    return (
      <div className={classes.QuizCreator}>
        <div>
          <h1>Test creation</h1>

          <form onSubmit={this.submitHandler}>

            { this.renderControls() }

            <select></select>

            <Button
              type="primary"
              onClick={this.addQuestionHandler}
            >
              Add a question
            </Button>

            <Button
              type="success"
              onClick={this.createQuizHandler}
            >
              Create TEST
            </Button>

          </form>
        </div>
      </div>
    )
  }
}