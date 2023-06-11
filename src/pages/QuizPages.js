import React, { useState } from 'react';
import { QuizQuestion } from '../QuizComponent/QuizQuestion';
import { Box, Button, Card, CardActions, Grid, Stack, Typography } from '@mui/material';

const QuizPages = () => {
    const [currentQues, setCurrentQues] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(0);

    const handleAnswerResponse = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1)
        }

        const nextQuestion = currentQues + 1;
        if (nextQuestion < QuizQuestion.questions.length) {
            setCurrentQues(nextQuestion);
        } else {
            setShowScore(true);
        }
    }
    return (
        <Box>
            <Stack mt={3} direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                <Typography variant="h1" sx={{ fontSize: 40 }}> {QuizQuestion.assessmentName} </Typography>
                <Typography variant="h1" sx={{ fontSize: 40 }}> {QuizQuestion.duration_minutes}min </Typography>
            </Stack>
            <Stack mt={2}>
                <Typography variant="body" sx={{ textAlign: 'justify', textTransform: 'capitalize' }}>
                    {QuizQuestion.description}
                </Typography>
            </Stack>
            {showScore ? (
                <Box>
                    <Stack mt={3}>
                        <Typography variant="h4">  You have scored {score} out of {QuizQuestion.questions.length} </Typography>
                    </Stack>
                </Box>
            ) : (
                <>
                    <Box>
                        <Stack mt={3}>
                            <Typography variant="h2" sx={{ fontSize: 30 }}>{currentQues + 1} / {QuizQuestion.questions.length}  </Typography>
                        </Stack>

                        <Stack mt={2}>
                            <Typography variant="h1" sx={{ fontSize: 30, fontWeight: 600 }}> {QuizQuestion.questions[currentQues].question} </Typography>
                        </Stack>
                    </Box>

                    <Grid container spacing={2} mt={1} >
                        {QuizQuestion.questions[currentQues].options.map((name) => (
                            <Grid item xs={12} sm={6} md={6} lg={6} mt={1}>
                                <Button variant="outlined" onClick={() => handleAnswerResponse(name.isCorrect)}> {name.name} </Button>
                            </Grid>
                        ))}
                    </Grid>
                </>
            )
            }
        </Box>
    )
}

export default QuizPages;