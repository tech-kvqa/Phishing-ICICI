<!-- <template>
    <div class="ios-container">
        <div v-if="showPopup" class="popup">
        <div class="popup-content"> -->
            <!-- Phishing alert content -->

            <!-- <div v-if="!showStudyMaterial && !showQuestions && !showCloseButton" class="alert-popup"> -->
                <!-- <h2 class="popup-title">Alert: Phishing Attempt Detected!</h2>
                <p class="warning-text blinking">
                    You've clicked on a link from a suspicious email, which could have led to a phishing attack. Cybercriminals use such tricks to steal sensitive information like your passwords, financial details, or personal data.
                </p>
                <p class="warning-text blinking">
                    To stay safe online, always verify the source of emails before clicking on any links. Don't worry, you're not in trouble—this is a simulated phishing test to help you learn!
                </p>
                <p class="warning-text blinking">
                    Please attend the tutorial to enhance your awareness and protect yourself from future threats.
                </p>
                <button class="button-primary" @click="startTutorial">Attend Tutorial</button> -->
                <!-- <h1>You Have Been Phished!</h1>
                <img src="\RIA_logo.jpeg" alt="Company Logo" class="ria-logo">
                <div class="warning-text">
                    <p>This was a Phishing Simulation exercise conducted by RIA Advisory under the guidance of RIA CISO Salman Ansari. You shouldn't have clicked on the link. You can see that this email was generated from outside. The email is from a different domain than RIA Advisory. You should be cautious before clicking any unknown link that is from outside and enticing you to click on some link.</p>
                </div>
                <p class="warning">As you clicked on the link, it is mandatory for you to complete the RIA Phishing training. Click the link below to complete the training.</p>
                <button class="button-primary" @click="startTutorial">RIA Phishing Training Link</button>   
            </div> -->

            <!-- <transition name="slide"> -->
                <!-- Study Material Section -->
            <!-- <div v-if="showStudyMaterial && !showQuestions" ref="studyMaterialSection">
                <h2 class="popup-title">Study Material</h2>

                <div class="content-section">
                    <h3 class="section-title">Course Content</h3>
                    <ul class="content-list">
                        <li class="content-item">What is Phishing?</li>
                        <li class="content-item">Common Phishing Techniques</li>
                        <li class="content-item">How to Recognize Phishing Emails</li>
                        <li class="content-item">Best Practices for Online Safety</li>
                    </ul>
                </div> -->

                <!-- Video Section (Google Slide presentation) -->
                <!-- <div class="video-section">
                    <h3 class="video-title">Phishing Awareness Tutorial</h3>
                    <iframe
                        ref="presentationIframe" 
                        src="https://docs.google.com/presentation/d/e/2PACX-1vSkHqHBoKf3xM2yy9QMU-98GbyywQACmHqLX2Uno-xI1zDcIWckVC8_PjYqO34UW2RGMbFqZgnCc170/embed?start=true&loop=false&delayms=3000" 
                        frameborder="0"
                        class="presentation-iframe" 
                        allowfullscreen
                        mozallowfullscreen 
                        webkitallowfullscreen>
                    </iframe>
                </div>

                <button 
                    class="button-primary" 
                    :disabled="!isPresentationCompleted"  
                    @click="fetchQuestions">
                    Start Quiz
                </button>
            </div>
            </transition> -->
            
            <!-- <transition> -->
            <!-- Quiz Section -->
            <!-- <div v-if="showQuestions" class="questions-container">
                <h2 class="popup-title">Quiz: Phishing Awareness</h2>
                <div class="questions-wrapper">
                    <div v-for="(question, index) in questions" :key="index" class="question">
                        <p class="question-text">{{ question.question_text }}</p>
                        <ul class="options-list">
                            <li v-for="(option, idx) in question.options" :key="idx" class="option-item">
                                <label class="option-label">
                                    <input type="radio" :name="'question_' + index" :value="option" v-model="answers[index]" />
                                    {{ option }}
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
                <button class="button-primary" @click="submitAnswers">Submit Answers</button>
            </div>
            </transition> -->
            

            <!-- <div v-if="showScoreSection" class="score-container">
                <h3 class="score-text">You scored {{ score }}%.</h3>

                <button
                    v-if="score >= 70 && showCloseButton"
                    class="button-secondary"
                    @click="closePopup">
                    Close
                </button>

                <button
                    v-else
                    class="button-secondary"
                    @click="redoQuiz">
                    Redo Quiz
                </button> -->

                <!-- <button class="button-secondary" @click="gotoclose">Next</button> -->
            <!-- </div> -->

            <!-- <div v-if="showCloseButton">
                <p>Thank you for participating in the data phishing awareness program. Soon you will get your result.</p>
                <button class="button-secondary" @click="closePopup">Close</button>
            </div> -->

            <!-- <div v-if="showScoreSection" class="score-container">
                <h3 class="score-text">You scored {{ score }}%.</h3>

                <div v-if="score >= 70">
                    <p>Thank you for participating in the data phishing awareness program. Soon you will get your result.</p>
                    <button class="button-primary" @click="closePopup">
                        Close
                    </button>
                </div>

                <div v-else>
                    <button class="button-secondary" @click="redoQuiz">
                        Redo Quiz
                    </button>
                </div>
            </div>
        </div>
    </div>
    </div>
    
</template> -->

<!-- <script>
export default {
    props: {
       colleague_id: {
           type: String,
           required: true,
       },
   },

    data() {
        return {
            showPopup: false,
            showStudyMaterial: false,
            showQuestions: false,
            showCloseButton: false,
            questions: [],
            answers: [],
            isPresentationCompleted: false,
            score: 0,
            showScoreSection: false,
            colleague_id: null,
        };
    },

    created() {
        const colleagueId = this.$route.params.colleague_id;
        this.fetchData(colleagueId);

        // Check if the route is for study material
        if (this.$route.path.startsWith('/study-material')) {
            this.showStudyMaterial = true; // Open the study material section directly
            this.trackPresentationCompletion();
        }
    },

    mounted() {
        this.colleague_id = this.$route.params.colleague_id;
    }, -->

    <!-- methods: { -->
        <!-- // async fetchData(colleagueId) {
        //     try {
        //         const response = await fetch(`http://127.0.0.1:5000/phishing_opened/${colleagueId}`);
        //         const data = await response.json();
        //         if (data.showPopup) {
        //             this.showPopup = true;
        //         } else {
        //             this.showPopup = false;
        //         }
        //     } catch (error) {
        //         console.error('Error fetching data:', error);
        //     }
        // },


        async fetchData(colleagueId) {
            console.log('Fetching data for colleague ID:', colleagueId); // Check what ID is being sent
            try {
                const response = await fetch(`http://127.0.0.1:5000/phishing_opened/${colleagueId}`);
                const data = await response.json();
                console.log('Response data:', data); // Log the response data
                if (data.showPopup) {
                    this.showPopup = true;
                } else {
                    this.showPopup = false;
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },

        startTutorial() {
            this.showStudyMaterial = true;
            this.$nextTick(() => {
                this.enterFullScreen();
                this.trackPresentationCompletion();
            });
        },
        enterFullScreen() {
            const studyMaterialSection = this.$refs.studyMaterialSection;

            if (studyMaterialSection && studyMaterialSection.requestFullscreen) {
                studyMaterialSection.requestFullscreen();
            } else if (studyMaterialSection && studyMaterialSection.mozRequestFullScreen) {
                studyMaterialSection.mozRequestFullScreen();
            } else if (studyMaterialSection && studyMaterialSection.webkitRequestFullscreen) {
                studyMaterialSection.webkitRequestFullscreen();
            } else if (studyMaterialSection && studyMaterialSection.msRequestFullscreen) {
                studyMaterialSection.msRequestFullscreen();
            } else {
                console.warn("Full screen is not supported");
            }
            document.addEventListener('keydown', this.preventEsc);
        },
        preventEsc(event) {
            if (event.key === "Escape") {
                event.preventDefault();
            }
        }, -->
        <!-- trackPresentationCompletion() {
            const presentationDuration = 3000;
            setTimeout(() => {
                this.isPresentationCompleted = true;
            }, presentationDuration);
        },
        async fetchQuestions() {
            try {
                const response = await fetch(`http://127.0.0.1:5000/questions`);
                const data = await response.json();
                this.questions = data;
                this.answers = Array(data.length).fill(null);
                this.showQuestions = true;
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        },
        // async submitAnswers() {
        //     const colleagueId = this.$route.params.colleague_id;
        //     try {
        //         const response = await fetch(`http://127.0.0.1:5000/submit_answers/${colleagueId}`, {
        //             method: 'POST',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             },
        //             body: JSON.stringify({ answers: this.answers }),
        //         });
        //         const result = await response.json();
        //         if (result.message) {
        //             this.showQuestions = false;
        //             this.showStudyMaterial = false;
        //             this.showCloseButton = true;
        //         }
        //     } catch (error) {
        //         console.error('Error submitting answers:', error);
        //     }
        // },

        // async submitAnswers() {
        //     const colleagueId = this.$route.params.colleague_id;
        //     try {
        //         const response = await fetch(`http://127.0.0.1:5000/submit_answers/${colleagueId}`, {
        //             method: 'POST',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             },
        //             body: JSON.stringify({ answers: this.answers }),
        //         });
        //         const result = await response.json();
        //         if (result.message) {
        //             console.log('Submit Answers Response:', result);
        //             this.score = result.score;
        //             this.showQuestions = false;
        //             this.showStudyMaterial = false;
        //             this.showScoreSection = true;
        //             this.showCloseButton = true;
        //             this.status = result.status;
        //         }
                
        //     } catch (error) {
        //         console.error('Error submitting answers:', error);
        //     }
        // },


//         async submitAnswers() {
//     const colleagueId = this.$route.params.colleague_id;
//     try {
//         const response = await fetch(`http://127.0.0.1:5000/submit_answers/${colleagueId}`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ answers: this.answers }),
//         });
//         const result = await response.json();
//         if (result.message) {
//             this.score = result.score;
//             this.showQuestions = false;
//             this.showStudyMaterial = false;
//             this.showScoreSection = true;
//             this.showCloseButton = true;
            
//             const status = this.score >= 70 ? 'Completed' : 'Pending';
//             // Update the status of the report
//             await this.updateReportStatus(colleagueId, status);

//             await this.sendEmail(this.score);

//             this.showScoreSection = true;
//         }
//     } catch (error) {
//         console.error('Error submitting answers:', error);
//     }
// },


async submitAnswers() {
     const colleagueId = this.$route.params.colleague_id;
     
     // Ensure questionIds is correctly assigned (assuming you get question IDs from the `questions` array)
     const questionIds = this.questions.map(question => question.id);

     const requestData = {
         answers: this.answers,
         question_ids: questionIds  // Add question_ids here
     };

     try {
         const response = await fetch(`http://127.0.0.1:5000/submit_answers/${colleagueId}`, {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify(requestData),  // Send both answers and question_ids
         });

         const result = await response.json();
         if (result.message) {
             this.score = result.score;
             this.showQuestions = false;
             this.showStudyMaterial = false;
             this.showScoreSection = true;
             this.showCloseButton = true;

             const status = this.score >= 70 ? 'Completed' : 'Pending';
             await this.updateReportStatus(colleagueId, status);
             await this.sendEmail(this.score);

             this.showScoreSection = true;
         }
     } catch (error) {
         console.error('Error submitting answers:', error);
     }
 }, -->



<!-- async updateReportStatus(colleagueId, status) {
    try {
        const response = await fetch(`http://127.0.0.1:5000/update_report_status/${colleagueId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status }),
        });
        if (!response.ok) {
            throw new Error('Failed to update report status');
        }
        console.log('Report status updated successfully');
    } catch (error) {
        console.error('Error updating report status:', error);
    }
}, -->


    <!-- //     async downloadPDF() {
    //        console.log("Current colleague_id:", this.colleague_id);
    //        try {
    //            const response = await fetch(`http://127.0.0.1:5000/download_report/${this.colleague_id}`);
    //            const blob = await response.blob();
    //            const url = window.URL.createObjectURL(blob);
    //            const a = document.createElement('a');
    //            a.style.display = 'none';
    //            a.href = url;
    //            a.download = `report_${this.colleague_id}.pdf`;
    //            document.body.appendChild(a);
    //            a.click();
    //            window.URL.revokeObjectURL(url);
    //        } catch (error) {
    //            console.error('Failed to download PDF report:', error);
    //        }
    //    },

        async downloadPDF(colleagueId) {
            try {
                const response = await fetch(`http://127.0.0.1:5000/download_certificate/${colleagueId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = `certificate_${this.colleague_id}.pdf`; // Dynamic filename
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            } catch (error) {
                console.error('Error downloading PDF:', error);
            }
        },

        redoQuiz() {
            this.showScoreSection = false;
            this.showQuestions = true;
            this.fetchQuestions();
        },

        gotoclose() {
            this.showScoreSection = false;
            this.showCloseButton = true;
        },
        
        closePopup() {
            this.showPopup = false;
            window.close();
        }, -->

        <!-- // async closePopup() {
        //     // Send email if the quiz has been submitted
        //     if (this.score !== null) {
        //         await this.sendEmail();
        //     }
        //     this.showPopup = false;
        //     window.close();
        // },

    //     async sendEmail() {
    //     const colleagueId = this.$route.params.colleague_id;
    //     try {
    //         const response = await fetch(`http://127.0.0.1:5000/send_result_email`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ /* Any relevant data */ }),
    //         });
    //         if (!response.ok) {
    //             throw new Error('Failed to send email');
    //         }
    //         console.log('Email sent successfully');
    //     } catch (error) {
    //         console.error('Error sending email:', error);
    //     }
    // },

//     async sendEmail(score) {
//     const colleagueId = this.$route.params.colleague_id;  // This should be an email, adjust if necessary
//     const studyMaterialLink = `http://localhost:8080/study-material/${colleagueId}`; // Update with your actual domain
//     const emailContent = score >= 70
//         ? { subject: "Training Program Completed", body: "Congratulations on completing the training program!" }
//         : { subject: "Training Program Incomplete", body: "You need to reattempt the training program. Please click the link to start again. You can review the study material [here](${studyMaterialLink})." };

//     try {
//         const response = await fetch(`http://127.0.0.1:5000/send_result_email`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 colleague_id: colleagueId,  // Make sure this is the email or use the correct identifier
//                 subject: emailContent.subject,
//                 body: emailContent.body,
//             }),
//         });

//         if (!response.ok) {
//             throw new Error('Failed to send email: ' + response.statusText);
//         }
//         console.log('Email sent successfully');
//     } catch (error) {
//         console.error('Error sending email:', error);
//     }
// }

//     }
// };
// </script> -->

<!-- // <style scoped>


// .warning-text {
//     font-size: 0.9em; 
//     color: #333;
//     margin: 10px 0;
//     line-height: 1.5;
// }

// .study-material-container {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// }

// .video-section {
//     width: 100%;
//     margin-bottom: 20px;
// }

// .content-section {
//     text-align: left;
//     margin-bottom: 20px;
// }

// .presentation-iframe {
//     width: 100%;
//     height: 400px;
//     border: none;
// }

// .section-title {
//     font-size: 1.3em; 
//     margin-bottom: 10px;
// }

// .content-list {
    padding-left: 20px;
    gap: 0 6px;
// }

// .content-item {
//     font-size: 0.9em;
//     margin: 5px 0;
// }

// .popup {
//     position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: rgba(0, 0, 0, 0.9);
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     z-index: 1000;
//     padding: 20px;
// }

// .popup-content {
//     background: #ffffff;
//     border-radius: 16px;
//     width: 100%;
//     max-width: 800px;
//     max-height: 90vh;
//     box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
//     padding: 20px;
//     text-align: center;
//     overflow-y: auto;
//     animation: fadeIn 0.3s ease-in-out;
// }

// .popup-title {
//     font-size: 1.8em;
//     color: #007bff;
//     margin-bottom: 20px;
//     font-weight: 700;
// }

// .questions-container {
//     margin-top: 20px;
// }

// .questions-wrapper {
//     text-align: left;
// }

// .question {
//     background: #f8f9fa;
//     border-radius: 10px;
//     padding: 15px;
//     margin: 10px 0;
//     box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
// }

// .question-text {
//     font-size: 1.2em;
//     margin-bottom: 10px;
//     font-weight: 600;
// }

// .options-list {
//     list-style: none;
//     padding: 0;
// }

// .option-item {
//     margin: 5px 0;
// }

// .option-label {
//     display: flex;
//     align-items: center;
//     padding: 10px;
//     background: #e9ecef;
//     border-radius: 5px;
//     cursor: pointer;
//     transition: background 0.2s;
// }

// .option-label:hover {
//     background: #d6d8db;
// }

// .button-primary, .button-secondary {
//     padding: 10px 15px;
//     font-size: 1.1em;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
//     margin-top: 20px;
// }

// .button-primary {
//     background-color: #007bff;
//     color: white;
//     transition: background 0.2s;
// }

// .button-primary:hover {
//     background-color: #0056b3;
// }

// .button-secondary {
//     background-color: #6c757d;
//     color: white;
// }

// .button-secondary:hover {
//     background-color: #5a6268;
// }

// .button-primary {
//     padding: 10px 15px;
//     font-size: 1.1em;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
//     margin-top: 20px;
//     background-color: #007bff;
//     color: white;
//     transition: background 0.2s;
// }

// .button-primary:disabled {
//     background-color: #ccc;
//     color: #666;
//     cursor: not-allowed;
// }

// .button-primary:not(:disabled):hover {
//     background-color: #0056b3;
// }

// .alert-popup {
//     background-color: #fff3cd;
//     border: 1px solid #ffeeba;
//     border-radius: 8px;
//     padding: 20px;
//     box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
//     max-width: 600px;
//     margin: 20px auto;
//     text-align: center;
// }

// .warning-text {
//     color: #856404;
//     font-size: 16px;
//     line-height: 1.5;
//     margin-bottom: 10px;
// }

// .blinking {
//     animation: blink-animation 1s steps(5, start) infinite;
// }

// @keyframes blink-animation {
//     to {
//         visibility: hidden;
//     }
// }
// h1 {
//     color: #dc3545;
//     text-align: center;
// }

// p {
//     margin-bottom: 15px;
// } 

// .warning { 
//     background-color: #ffeeba;
//     border-left: 6px solid #ffc107;
//     padding: 10px;
//     margin: 20px 0;
// }

// .ria-logo {
//     width: 100px;
//     height: auto;
// }

// :root {
//     --ios-blue: #007AFF;
//     --ios-green: #34C759;
//     --ios-red: #FF3B30;
//     --ios-gray: #F2F2F7;
//     --ios-font: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif;
// }

// .ios-container {
//     font-family: var(--ios-font);
//     color: #333;
//     background-color: var(--ios-gray);
//     padding: 20px;
// }

// /* .popup {
//     position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: rgba(0, 0, 0, 0.8);
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     z-index: 1000;
//     padding: 20px;
// } */

// /* .popup-content {
//     background: #fff;
//     border-radius: 16px;
//     max-width: 80%;
//     padding: 20px;
//     text-align: center;
// } */

// /* .popup-title {
//     font-size: 1.8em;
//     color: var(--ios-blue);
// } */

// .button-primary {
//     background-color: var(--ios-blue);
//     color: white;
//     border-radius: 12px;
//     padding: 12px 20px;
//     font-size: 1em;
//     font-weight: 600;
//     margin: 10px;
//     transition: background 0.3s ease;
// }

// .button-primary:hover {
//     background-color: #0056b3;
// }

// .button-secondary {
//     background-color: #6c757d;
//     color: white;
//     border-radius: 12px;
//     padding: 12px 20px;
//     font-size: 1em;
// }

// .questions-container {
//     padding: 20px;
//     background-color: #fff;
//     border-radius: 16px;
// }

// .question {
//     background: var(--ios-gray);
//     border-radius: 10px;
//     padding: 15px;
//     margin: 10px 0;
// }

// .section-title {
//     font-size: 1.3em;
//     color: #333;
// }

// .slide-enter-active,
// .slide-leave-active {
//     transition: transform 0.3s ease;
// }
// .slide-enter {
//     transform: translateX(100%);
// }
// .slide-leave-to {
//     transform: translateX(-100%);
// }
// </style> -->


<template>
    <div v-if="showPopup" class="popup">
        <div class="popup-content" :class="{ 'score-popup': showScoreSection, 'phish-warning-active': isPhishingWarningActive}">
            <!-- Phishing alert content -->

            <div v-if="!showStudyMaterial && !showQuestions && !showCloseButton" class="alert-popup">
                <!-- <h2 class="popup-title">Alert: Phishing Attempt Detected!</h2>
                <p class="warning-text blinking">
                    You've clicked on a link from a suspicious email, which could have led to a phishing attack. Cybercriminals use such tricks to steal sensitive information like your passwords, financial details, or personal data.
                </p>
                <p class="warning-text blinking">
                    To stay safe online, always verify the source of emails before clicking on any links. Don't worry, you're not in trouble—this is a simulated phishing test to help you learn!
                </p>
                <p class="warning-text blinking">
                    Please attend the tutorial to enhance your awareness and protect yourself from future threats.
                </p>
                <button class="button-primary" @click="startTutorial">Attend Tutorial</button>
            </div> -->

            <h1 class="blinking">You Have Been Phished!</h1>
                <!-- <img src="\RIA_logo.jpeg" alt="Company Logo" class="ria-logo"> -->
                <img src="\Xploit2Secure.png" alt="Company Logo" class="ria-logo">
                <div class="warning-text">
                    <p>This was a Phishing Simulation exercise conducted by Xploit2Secure under the guidance of Xploit2Secure's Lav Kaushik. You shouldn't have clicked on the link. You can see that this email was generated from outside. The email is from a different domain than Xploit2Secure. You should be cautious before clicking any unknown link that is from outside and enticing you to click on some link.</p>
                </div>
                <p class="warning">As you clicked on the link, it is mandatory for you to complete the Xploit2Secure Phishing training. Xploit2Secure Infosec team will schedule the phishing awareness training session and Quiz for you shortly.</p>
                <button class="button-primary" @click="startTutorial">Phishing Training Link</button>   
            </div>


            <!-- Study Material Section -->
            <div v-if="showStudyMaterial && !showQuestions" ref="studyMaterialSection">
                <h2 class="popup-title">Study Material</h2>

                <div class="content-section">
                    <h3 class="section-title">Course Content</h3>
                    <ul class="content-list">
                        <li class="content-item">What is Phishing?</li>
                        <li class="content-item">Common Phishing Techniques</li>
                        <li class="content-item">How to Recognize Phishing Emails</li>
                        <li class="content-item">Best Practices for Online Safety</li>
                    </ul>
                </div>

                <!-- Video Section (Google Slide presentation) -->
                <div class="video-section">
                    <h3 class="video-title">Phishing Awareness Tutorial</h3>
                    <iframe
                        ref="presentationIframe" 
                        src="https://docs.google.com/presentation/d/e/2PACX-1vSkHqHBoKf3xM2yy9QMU-98GbyywQACmHqLX2Uno-xI1zDcIWckVC8_PjYqO34UW2RGMbFqZgnCc170/embed?start=true&loop=false&delayms=3000" 
                        frameborder="0"
                        class="presentation-iframe" 
                        allowfullscreen
                        mozallowfullscreen 
                        webkitallowfullscreen>
                    </iframe>
                </div>

                <button 
                    class="button-primary fullscreen-button" 
                    :disabled="!isPresentationCompleted"  
                    @click="fetchQuestions">
                    Start Quiz
                </button>
            </div>

            <!-- Quiz Section -->
            <div v-if="showQuestions" class="questions-container">
                <h2 class="popup-title">Quiz: Phishing Awareness</h2>
                <div class="questions-wrapper">
                    <!-- <div v-for="(question, index) in questions" :key="index" class="question"> -->
                        <div v-for="(question, index) in selectedQuestions" :key="index" class="question">
                        <p class="question-text">{{ question.question_text }}</p>
                        <ul class="options-list">
                            <li v-for="(option, idx) in question.options" :key="idx" class="option-item">
                                <!-- <label class="option-label">
                                    <input class="quizCheckbox" type="radio" :name="'question_' + index" :value="option" v-model="answers[index]" />
                                    {{ option }}
                                </label> -->
                                <label class="option-label" :class="{ 'selected-option': answers[index] === option }">
                                    <input class="quizCheckbox" type="radio" :name="'question_' + index" :value="option" v-model="answers[index]"/>
                                    {{ option }}
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
                <button class="button-primary" @click="submitAnswers">Submit Answers</button>
            </div>

            <!-- <div v-if="showScoreSection" class="score-container">
                <h3 class="score-text">You scored {{ score }}%.</h3>

                <button
                    v-if="score >= 70"
                    class="button-primary"
                    @click="downloadPDF(colleague_id)">
                    Download Certificate
                </button>

                <button
                    v-else
                    class="button-secondary"
                    @click="redoQuiz">
                    Redo Quiz
                </button> -->

                <!-- <button class="button-secondary" @click="gotoclose">Next</button> -->
            <!-- </div> -->

            <div v-if="showScoreSection" class="score-container">
            <img src="/Quiz_Marks.png" alt="Quiz_Marks" class="Quiz_Marks" />
                <h3 class="score-text">You scored {{ score }}%.</h3>

                <div v-if="score >= 70">
                    <p>Thank you for participating in the data phishing awareness program. Soon you will get your result.</p>
                    <button class="button-primary" @click="closePopup">
                        Close
                    </button>
                </div>

                <div v-else>
                    <button class="button-secondary" @click="redoQuiz">
                        Redo Quiz
                    </button>
                </div>
            </div>

            <!-- <div v-if="showCloseButton">
                <p>Thank you for participating in the data phishing awareness program. Soon you will get your result.</p>
                <button class="button-secondary" @click="closePopup">Close</button>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {

    props: {
       colleague_id: {
           type: String,
           required: true,
       },
   },

   
    data() {
        return {
            showPopup: false,
            showStudyMaterial: false,
            showQuestions: false,
            showCloseButton: false,
            questions: [],
            answers: [],
            isPresentationCompleted: false,
            score: 0,
            showScoreSection: false,
            colleague_id: null,
        };
    },
    // created() {
    //     const colleagueId = this.$route.params.colleague_id;
    //     this.fetchData(colleagueId);
    // },

    created() {
        const colleagueId = this.$route.params.colleague_id;
        this.fetchData(colleagueId);

        // Check if the route is for study material
        if (this.$route.path.startsWith('/study-material')) {
            this.showStudyMaterial = true; // Open the study material section directly
            this.trackPresentationCompletion();
        }
    },

    computed: {
        isPhishingWarningActive() {
            return !this.showStudyMaterial && !this.showQuestions && !this.showCloseButton;
        }
    },

    mounted() {
        this.colleague_id = this.$route.params.colleague_id;
    },

    methods: {

        async fetchData(colleagueId) {
            console.log('Fetching data for colleague ID:', colleagueId); // Check what ID is being sent
            try {
                const response = await fetch(`http://35.182.29.153/api/phishing_opened/${colleagueId}`);
                // const response = await fetch(`http://127.0.0.1:5000/phishing_opened/${colleagueId}`);
                // const response = await fetch(`https://phishing-application-demo.onrender.com/phishing_opened/${colleagueId}`);
                const data = await response.json();
                console.log('Response data:', data); // Log the response data
                if (data.showPopup) {
                    this.showPopup = true;
                } else {
                    this.showPopup = false;
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },

        startTutorial() {
            this.showStudyMaterial = true;
            this.$nextTick(() => {
                this.enterFullScreen();
                this.trackPresentationCompletion();
            });
        },
        // enterFullScreen() {
        //     const studyMaterialSection = this.$refs.studyMaterialSection;

        //     if (studyMaterialSection && studyMaterialSection.requestFullscreen) {
        //         studyMaterialSection.requestFullscreen();
        //     } else if (studyMaterialSection && studyMaterialSection.mozRequestFullScreen) {
        //         studyMaterialSection.mozRequestFullScreen();
        //     } else if (studyMaterialSection && studyMaterialSection.webkitRequestFullscreen) {
        //         studyMaterialSection.webkitRequestFullscreen();
        //     } else if (studyMaterialSection && studyMaterialSection.msRequestFullscreen) {
        //         studyMaterialSection.msRequestFullscreen();
        //     } else {
        //         console.warn("Full screen is not supported");
        //     }
        //     document.addEventListener('keydown', this.preventEsc);
        // },

        enterFullScreen() {
            const studyMaterialSection = this.$refs.studyMaterialSection;

            if (studyMaterialSection) {
                // Add a custom fullscreen class
                studyMaterialSection.classList.add("study-material-fullscreen");

                // Request fullscreen
                if (studyMaterialSection.requestFullscreen) {
                studyMaterialSection.requestFullscreen();
                } else if (studyMaterialSection.mozRequestFullScreen) {
                studyMaterialSection.mozRequestFullScreen();
                } else if (studyMaterialSection.webkitRequestFullscreen) {
                studyMaterialSection.webkitRequestFullscreen();
                } else if (studyMaterialSection.msRequestFullscreen) {
                studyMaterialSection.msRequestFullscreen();
                } else {
                console.warn("Full screen is not supported");
                }

                document.addEventListener("keydown", this.preventEsc);

                // Listen for exit fullscreen to remove the class
                document.addEventListener("fullscreenchange", this.handleFullscreenChange);
            }
            },

        preventEsc(event) {
            if (event.key === "Escape") {
                event.preventDefault();
            }
        },

        trackPresentationCompletion() {
            const presentationDuration = 5000;
            setTimeout(() => {
                this.isPresentationCompleted = true;
            }, presentationDuration);
        },

        // async fetchQuestions() {
        //     try {
        //         const response = await fetch(`http://127.0.0.1:5000/questions`);
        //         const data = await response.json();
        //         this.questions = data;
        //         this.answers = Array(data.length).fill(null);
        //         this.showQuestions = true;
        //     } catch (error) {
        //         console.error('Error fetching questions:', error);
        //     }
        // },


        // async fetchQuestions() {
        //     try {
        //         const response = await fetch('http://127.0.0.1:5000/get_random_questions');
        //         if (!response.ok) {
        //             throw new Error('Failed to fetch questions');
        //         }
        //         const data = await response.json();
        //         this.questions = data.questions;
        //         this.answers = Array(data.length).fill(null);
        //         this.showQuestions = true;
        //     } catch (error) {
        //         console.error('Error fetching questions:', error);
        //     }
        // },

        async fetchQuestions() {
            try {
                // const response = await fetch('http://127.0.0.1:5000/get_random_questions');
                const response = await fetch('http://35.182.29.153/api/get_random_questions');
                // const response = await fetch('https://phishing-application-demo.onrender.com/get_random_questions');
                if (!response.ok) {
                    throw new Error('Failed to fetch questions');
                }
                const data = await response.json();
                this.selectedQuestions = data.questions; // Store fetched questions in a variable
                this.answers = Array(this.selectedQuestions.length).fill(null); // Initialize answers array
                this.showQuestions = true;
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        },

        // async submitAnswers() {
        //     const colleagueId = this.$route.params.colleague_id;
        //     try {
        //         const response = await fetch(`https://phishing-mail-application.onrender.com/submit_answers/${colleagueId}`, {
        //             method: 'POST',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             },
        //             body: JSON.stringify({ answers: this.answers }),
        //         });
        //         const result = await response.json();
        //         if (result.message) {
        //             this.showQuestions = false;
        //             this.showStudyMaterial = false;
        //             this.showCloseButton = true;
        //         }
        //     } catch (error) {
        //         console.error('Error submitting answers:', error);
        //     }
        // },

        // async submitAnswers() {
        //     const colleagueId = this.$route.params.colleague_id;
        //     try {
        //         const response = await fetch(`https://phishing-mail-application.onrender.com/submit_answers/${colleagueId}`, {
        //             method: 'POST',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             },
        //             body: JSON.stringify({ answers: this.answers }),
        //         });
        //         const result = await response.json();
        //         if (result.message) {
        //             console.log('Submit Answers Response:', result);
        //             this.score = result.score;
        //             this.showQuestions = false;
        //             this.showStudyMaterial = false;
        //             this.showScoreSection = true;
        //             this.showCloseButton = true;
        //         }
        //     } catch (error) {
        //         console.error('Error submitting answers:', error);
        //     }
        // },

        // async submitAnswers() {
        //     const colleagueId = this.$route.params.colleague_id;
        //     try {
        //         const response = await fetch(`http://127.0.0.1:5000/submit_answers/${colleagueId}`, {
        //             method: 'POST',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             },
        //             body: JSON.stringify({ answers: this.answers }),
        //         });
        //         const result = await response.json();
        //         if (result.message) {
        //             this.score = result.score;
        //             this.showQuestions = false;
        //             this.showStudyMaterial = false;
        //             this.showScoreSection = true;
        //             this.showCloseButton = true;
                    
        //             const status = this.score >= 70 ? 'Completed' : 'Pending';
        //             // Update the status of the report
        //             await this.updateReportStatus(colleagueId, status);

        //             await this.sendEmail(this.score);

        //             this.showScoreSection = true;
        //         }
        //     } catch (error) {
        //         console.error('Error submitting answers:', error);
        //     }
        // },

//         async submitAnswers() {
//     try {
//         let score = 0;
//         const totalQuestions = this.questions.length;

//         // Check answers and calculate score
//         this.answers.forEach((answer, index) => {
//             if (answer === this.questions[index].correct_answer) {
//                 score++;
//             }
//         });

//         // Save score to the data object
//         this.score = score;

//         // Send answers and score to the backend
//         const response = await fetch(`http://127.0.0.1:5000/submit_answers/${this.colleague_id}`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 answers: this.answers,
//                 score: this.score
//             })
//         });

//         const result = await response.json();
//         if (response.ok) {
//             console.log(result.message);
//             this.showScoreSection = true; // Show the score section
//         } else {
//             console.error('Error submitting answers:', result.error);
//         }
//     } catch (error) {
//         console.error('Error submitting answers:', error);
//     }
// },

async submitAnswers() {
    try {
        let score = 0;
        const totalQuestions = this.selectedQuestions.length; // Use selectedQuestions here

        // Check answers and calculate score
        this.answers.forEach((answer, index) => {
            if (answer === this.selectedQuestions[index].correct_answer) {
                score++;
            }
        });

        // Send answers and score to the backend
        // const response = await fetch(`http://127.0.0.1:5000/submit_answers/${this.colleague_id}`, {
        const response = await fetch(`http://35.182.29.153/api/submit_answers/${this.colleague_id}`, {
        // const response = await fetch(`https://phishing-application-demo.onrender.com/submit_answers/${this.colleague_id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                answers: this.answers,
                score: score,
                questions: this.selectedQuestions // Send the fetched questions to compare the answers
            })
        });

        const result = await response.json();
        if (response.ok) {
            console.log(result.message);
            this.showScoreSection = true;
            this.score = result.score;
            this.showQuestions = false;
            this.showStudyMaterial = false;
            this.showCloseButton = true;
        } else {
            console.error('Error submitting answers:', result.error);
        }
    } catch (error) {
        console.error('Error submitting answers:', error);
    }
},



        // async updateReportStatus(colleagueId, status) {
        //     try {
        //         const response = await fetch(`http://127.0.0.1:5000/update_report_status/${colleagueId}`, {
        //             method: 'POST',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             },
        //             body: JSON.stringify({ status }),
        //         });
        //         if (!response.ok) {
        //             throw new Error('Failed to update report status');
        //         }
        //         console.log('Report status updated successfully');
        //     } catch (error) {
        //         console.error('Error updating report status:', error);
        //     }
        // },


        async updateReportStatus(colleagueId, score) {
            try {
                // const response = await fetch(`http://127.0.0.1:5000/update_report_status/${colleagueId}`, {
                const response = await fetch(`http://35.182.29.153/api/update_report_status/${colleagueId}`, {
                // const response = await fetch(`https://phishing-application-demo.onrender.com/update_report_status/${colleagueId}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        score: score,  // Send the score to be updated in the database
                    }),
                });
                if (!response.ok) {
                    throw new Error('Failed to update report status');
                }
                console.log('Report status updated successfully');
            } catch (error) {
                console.error('Error updating report status:', error);
            }
        },


        // async downloadPDF() {
    //        console.log("Current colleague_id:", this.colleague_id);
    //        try {
    //            const response = await fetch(`http://127.0.0.1:5000/download_report/${this.colleague_id}`);
    //            const blob = await response.blob();
    //            const url = window.URL.createObjectURL(blob);
    //            const a = document.createElement('a');
    //            a.style.display = 'none';
    //            a.href = url;
    //            a.download = `report_${this.colleague_id}.pdf`;
    //            document.body.appendChild(a);
    //            a.click();
    //            window.URL.revokeObjectURL(url);
    //        } catch (error) {
    //            console.error('Failed to download PDF report:', error);
    //        }
    //    },

        async downloadPDF(colleagueId) {
            try {
                // const response = await fetch(`http://127.0.0.1:5000/download_certificate/${colleagueId}`);
                const response = await fetch(`http://35.182.29.153/api/download_certificate/${colleagueId}`);
                // const response = await fetch(`https://phishing-application-demo.onrender.com/download_certificate/${colleagueId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = `certificate_${this.colleague_id}.pdf`; // Dynamic filename
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            } catch (error) {
                console.error('Error downloading PDF:', error);
            }
        },

        // redoQuiz() {
        //     this.showScoreSection = false;
        //     this.showQuestions = true;
        // },

        async redoQuiz() {
            this.showScoreSection = false;
            this.showQuestions = true; // Hide the score section

            // Clear previous answers
            this.answers = Array(this.selectedQuestions.length).fill(null); // Reset answers array

            try {
                // Fetch a new set of random questions
                // const response = await fetch('http://127.0.0.1:5000/get_random_questions');
                const response = await fetch('http://35.182.29.153/api/get_random_questions');
                // const response = await fetch('https://phishing-application-demo.onrender.com/get_random_questions');
                if (!response.ok) {
                    throw new Error('Failed to fetch new questions');
                }

                const data = await response.json();
                this.selectedQuestions = data.questions; // Store new questions
                this.showQuestions = true; // Show the questions section again
            } catch (error) {
                console.error('Error fetching new questions:', error);
            }
        },


        gotoclose() {
            this.showScoreSection = false;
            this.showCloseButton = true;
        },

        closePopup() {
            this.showPopup = false;
            window.close();
        },

        // async sendEmail(score) {
        //     const colleagueId = this.$route.params.colleague_id;
        //     const studyMaterialLink = `http://127.0.0.1:5000/study-material/${colleagueId}`;
        //     const emailContent = score >= 70
        //         ? { subject: "Training Program Completed", body: "Congratulations on completing the training program!" }
        //         : { subject: "Training Program Incomplete", body: "You need to reattempt the training program. Please click the link to start again. You can review the study material [here](${studyMaterialLink})." };

        //     try {
        //         const response = await fetch(`http://127.0.0.1:5000/send_result_email`, {
        //             method: 'POST',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             },
        //             body: JSON.stringify({
        //                 colleague_id: colleagueId,  // Make sure this is the email or use the correct identifier
        //                 subject: emailContent.subject,
        //                 body: emailContent.body,
        //             }),
        //         });

        //         if (!response.ok) {
        //             throw new Error('Failed to send email: ' + response.statusText);
        //         }
        //         console.log('Email sent successfully');
        //     } catch (error) {
        //         console.error('Error sending email:', error);
        //     }
        // }

        async sendEmail(score) {
            const colleagueId = this.$route.params.colleague_id;  // This should be an email, adjust if necessary
            // const studyMaterialLink = `http://127.0.0.1:5000/study-material/${colleagueId}`;
            const studyMaterialLink = `http://35.182.29.153/api/study-material/${colleagueId}`;
            // const studyMaterialLink = `https://phishing-application-demo.onrender.com/study-material/${colleagueId}`;
            const emailContent = score >= 70
                ? { subject: "Training Program Completed", body: `Congratulations on completing the training program! Your score is ${score}.` }
                : { subject: "Training Program Incomplete", body: `You need to reattempt the training program. Your score is ${score}. You can review the study material [here](${studyMaterialLink}).` };

            try {
                // const response = await fetch(`http://127.0.0.1:5000/send_result_email`, {
                const response = await fetch(`http://35.182.29.153/api/send_result_email`, {
                // const response = await fetch(`https://phishing-application-demo.onrender.com/send_result_email`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        colleague_id: colleagueId,  // Make sure this is the email or use the correct identifier
                        subject: emailContent.subject,
                        body: emailContent.body,
                    }),
                });

                if (!response.ok) {
                    throw new Error('Failed to send email: ' + response.statusText);
                }
                console.log('Email sent successfully');
            } catch (error) {
                console.error('Error sending email:', error);
            }
        }
    }
};
</script>

<style scoped>


.warning-text {
    font-size: 0.9em; 
    color: #333;
    margin: 10px 0;
    line-height: 1.5;
}

.study-material-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.video-section {
    width: 100%;
    margin-bottom: 10px;
}

.content-section {
    position:relative;
    text-align: left;
    margin-bottom: 10px;
    border: 3px solid #dedede;
    border-radius: 8px;
    padding: 14px 20px;
    background: #ffffff;
    border-color: #1f3557;
}
.video-title {
    margin: 0;
    padding-bottom: 10px;
}
.presentation-iframe {
    width: 100%;
    height: 400px;
    border: none;
}

.section-title {
    font-size: 0.8em;
    margin: 0;
    position: absolute;
    top: -12px;
    background: #f8f8f8;
    padding: 4px 20px;
    border: 2px solid #dedede;
    border-radius: 20px;
    left: 12px;
    color: #1f3557;
    text-transform: uppercase;
    border-color: #1f3557;
}

.content-list {
    padding: 0 0 0 10px !important;
    gap: 0 6px;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
}

.content-item {
    font-size: 0.9em;
    padding: 6px;
    box-sizing: border-box;
    flex: 0 0 calc(50% - 10px);
    list-style-type: disclosure-closed;
}

.popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:#d3d3d3;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
}

.popup-content {
    /* background: #1f3557; */
    background: #e3f0ff;
    border-radius: 8px;
    width: 100%;
    max-width: 800px;
    max-height: 90vh;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    padding: 20px;
    text-align: center;
    overflow-y: auto;
    animation: fadeIn 0.3s ease-in-out;
}

.popup-title {
    font-size: 1em;
    color: #1f3557;
    margin: 0 20px 10px;
    font-weight: 700;
    text-transform: uppercase;
}

.popup-content::-webkit-scrollbar {
  width: 10px;
}

.popup-content::-webkit-scrollbar-track {
  background:rgb(177, 177, 177); 
}
 
.popup-content::-webkit-scrollbar-thumb {
  background: #1f3557; 
}

.popup-content::-webkit-scrollbar-thumb:hover {
  background:#007bff; 
}

.questions-container>h2 {
    font-size: 20px;
}

.questions-wrapper {
    text-align: left;
}

.question {
    background: #f8f9fa;
    border-radius: 10px;
    padding: 15px;
    margin: 10px 0;
    box-shadow: 0 2px 10px rgb(0 0 0 / 24%);
    border: 1px solid #dfdfdf;
}

.question-text {
    font-size: 1em;
    font-weight: 600;
    margin:0;
}

.options-list {
    list-style: none;
    padding: 0;
    margin: 1rem 0rem 0;
}

.option-item {
    margin: 5px 0;
    position:relative;
    transition: 
    transform 0.3s ease,
    background 0.3s ease,
    box-shadow 0.3s ease,
    color 0.3s ease;
}

.option-label{
    display: flex;
    align-items: center;
    padding: 10px 10px 10px 30px;
    /* background: #e9ecef; */
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.2s;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid #d9d9d9;
    box-shadow: 0 -2px 13px rgba(0, 0, 0, 0.15);
}
.quizCheckbox:checked + .option-label {
      background: linear-gradient(135deg, #1d61c7, #0f3d88);
      color:#fff;
    }
.quizCheckbox {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin: 0;
    left: 10px;
    z-index: 9;
}
.option-item:hover {
    background: linear-gradient(135deg, #1d61c7, #0f3d88);
    transform: scale(1.01);
    color:#fff;
  box-shadow: 0 8px 10px rgba(0,0,0,0.15);
  border-radius:4px;
}

.button-primary, .button-secondary {
    padding: 10px 15px;
    font-size: 1.1em;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.button-primary {
    background-color: #007bff;
    color: white;
    transition: background 0.2s;
}

.button-primary:hover {
    background-color: #0056b3;
}

.button-secondary {
    background-color: #6c757d;
    color: white;
}

.button-secondary:hover {
    background-color: #5a6268;
}

.button-primary {
    padding: 10px 15px;
    font-size: 1.1em;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    transition: background 0.2s;
}

.button-primary:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
}

.button-primary:not(:disabled):hover {
    background-color: #0056b3;
}

.alert-popup {
    background-color: white;
    border: 1px solid #ffeeba;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 20px auto;
    text-align: center;
}

/* .warning-text {
    color: #856404;
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 10px;
} */
.warning-text {
    color: #1f3557;
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 10px;
}

.blinking {
    animation: blink-animation 1s steps(5, start) infinite;
}

@keyframes blink-animation {
    to {
        visibility: hidden;
    }
}

/* h1 {
    color: #dc3545;
    text-align: center;
} */

h1 {
    color: #1f3557;
    text-align: center;
}

/* .warning {
   background-color: #ffeeba;
    border-left: 6px solid #ffc107;
    padding: 10px;
    margin: 20px 0;
} */

.warning {
   background-color: #f5f7f8;
    border-left: 6px solid #1f3557;
    padding: 10px;
    margin: 20px 0;
    color: #1f3557
}

.ria-logo {
    width: 150px;
    /* height: auto; */
    height: 40px;
}

.score-popup {
  max-width: 400px;
  height: 300px;
  overflow-y: auto;
}

/* .sketchyViewerContainer {
    background-color: #e3f0ff;
} */

.study-material-fullscreen {
  background: #ffffff !important;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.fullscreen-button {
  align-self: center;
  width: auto;
  max-width: 220px;
  padding: 10px 20px;
  font-size: 1rem;
}

.selected-option {
  background: linear-gradient(135deg, #1d61c7, #0f3d88);
  color: #fff;
  border: 1px solid #0f3d88;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.selected-option:hover {
  background: linear-gradient(135deg, #1d61c7, #0f3d88);
  color: #fff;
}

.phish-warning-active {
  background: #1f3557;
  color: #ffffff;
}

</style>




