import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux';


const SignUpForm = () => (
		<Form>
		<FormGroup>
		  <Label for="exampleEmail">Email</Label>
		  <Input type="email" name="email" id="exampleEmail" placeholder="your@email.com" />
		</FormGroup>
		<FormGroup>
		  <Label for="examplePassword">Password</Label>
		  <Input type="password" name="password" id="examplePassword" placeholder="type some gibberish with special signs @$£" />
		</FormGroup>
	
		<FormGroup tag="fieldset">
		  <legend>Your constent</legend>
		  <FormGroup check>
			<Label check>
			  <Input type="radio" name="radio1" />{' '}
			I accept all marketing and you can sell my data.
			</Label>
		  </FormGroup>
		  <FormGroup check>
			<Label check>
			  <Input type="radio" name="radio1" />{' '}
			  I accept only conditions of the service.
			</Label>
		  </FormGroup>
		  <FormGroup check disabled>
			<Label check>
			  <Input type="radio" name="radio1" disabled />{' '}
			  I don't accept anything...
			</Label>
		  </FormGroup>
		</FormGroup>
		<FormGroup check>
		  <Label check>
			<Input type="checkbox" />{' '}
			I am not a ROBOT!
		  </Label>
		</FormGroup>
		<Button>Submit</Button>
	  </Form>
	);


export default connect()(SignUpForm);