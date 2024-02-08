
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'react-toastify';
import { Button, Checkbox, message } from 'antd';
import { Link } from 'react-router-dom';
import { questionFilter } from '../../../../../redux/question/actionCreator';


function Quiz(props) {

    const [index, setCurrentIndex] = useState(0);
    const [selectedOptionIds, setSelectedOptionIds] = useState([]);
    const [step, setStepBack] = useState(3);
    const [userAnswers, setuserAnswers] = useState([]);
    const [currentQuestionId, setCurrentQuestionId] = useState(0);
    const { question } = useSelector((state) => ({
        question: state.Ques.Question,
    }));

    const dispatch = useDispatch();

    useEffect(() => {
        if (questionFilter()) {
            dispatch(questionFilter());
        }
        setCurrentIndex(0);
    }, []);

    // eslint-disable-next-line react/prop-types
    const { setshowPrivacyPolicy,changeStep } = props;

    const handleCheckboxChange = (optionId) => {
        if (selectedOptionIds.includes(optionId)) {
            setSelectedOptionIds(selectedOptionIds.filter((id) => id !== optionId));
            setCurrentQuestionId(question[index].question?.id);
        } else {
            setSelectedOptionIds([...selectedOptionIds, optionId]);
            setCurrentQuestionId(question[index].question?.id);
        }
    };

    

    const showNextQuestion = () => {
        if (selectedOptionIds.length > 0) {
          if (question && index < question.length - 1) {
            const newData = {
              questionId: currentQuestionId,
              answersId: selectedOptionIds,
            };
            const userAnswer = [...userAnswers, newData];
            setuserAnswers(userAnswer);
            
            setCurrentIndex((next) => next + 1);
            setStepBack(step + 1);
            setSelectedOptionIds([]);
            setCurrentQuestionId(question[index].question?.id);
          } else {
            // eslint-disable-next-line react/prop-types
            const { getUserAnswers } = props;
            getUserAnswers(userAnswers);
            changeStep('UserSignUp');
          }
        } else {
            message.error('Please Give the Answer Or Skip to this Question');
        }
    };

    const stepBack = () => {
        if (index > 0) {
          setCurrentIndex(index - 1);
        }
        if (step > 3) {
          setStepBack(step - 1);
        } else {
          changeStep('ClaimUserName');
        }
        setSelectedOptionIds([]);
        setCurrentQuestionId(question[index].question?.id);
    };
    
    const skipQuestion = () => {
        if (question && index < question.length - 1) {
            setCurrentIndex((next) => next + 1);
            setStepBack(step + 1);
            setSelectedOptionIds([]);
            setCurrentQuestionId(question[index].question?.id);
        } else {
            changeStep('UserSignUp');
        }
    };

    return (
        question?.length > 0 &&
        <>  
            <div className="signUpcntBoxmain answerbox" key={index}>
                <div className="signUpcntBox">
                    <h4>
                        Step {index + 2}/{question.length + 2}
                    </h4>
                    <h3>Submit Answer</h3>
                    <div className="answerboxcnt">
                        {question[index].question?.question}
                        <div className="optionsbox">
                            {question[index].options?.map((item) => (
                                <Checkbox
                                    key={item.id}
                                    onChange={() => handleCheckboxChange(item.id)}
                                    checked={selectedOptionIds.includes(item.id)}
                                >
                                    {item.option}
                                </Checkbox>
                            ))}
                        </div>
                        <div className="bottombtn">
                            <Link to="" className="btnskipques" onClick={skipQuestion}>
                                Skip Question
                            </Link>
                        </div>
                    </div>
                    <p className="privacytext">
                        We keep your info safe according to our{' '}
                        <Link to="" onClick={() => setshowPrivacyPolicy(true)}>
                            privacy policy
                        </Link>
                    </p>
                </div>
                {selectedOptionIds.length > 0 ? (
                    <Button className="btnnextbox" onClick={showNextQuestion}>
                        {' '}
                        <img src={require('../../../../../static/images/next_arrow.png')} alt="" />
                    </Button>
                ) : (
                    <Button className="btnnextbox" onClick={showNextQuestion} disabled>
                        {' '}
                        <img src={require('../../../../../static/images/next_arrow.png')} alt="" />
                    </Button>
                )}
                <Button onClick={stepBack}>Back</Button>
            </div>
        </>
    )
}

export default Quiz;