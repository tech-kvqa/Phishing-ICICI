<!-- <template>
    <div>
        <nav class="navbar">
            <div class="navbar-brand">
                <img src="Xploit2Secure.jpeg" alt="Logo" class="logo" />
                <div class="navbar-buttons">
                    <button @click="openQuestionModal">Manage Questions</button>
                    <button @click="logout">Logout</button>
                </div>
            </div>
        </nav>

        <div>
            <div v-if="showQuestionModal" class="modal">
                <div class="modal-content">
                    <div>
                        <h3>{{ isEditing ? 'Edit Question' : 'Add Question' }}</h3>
                        <form @submit.prevent="isEditing ? updateQuestion() : addQuestion()">
                            <input v-model="question.question_text" placeholder="Question Text" required />
                            <div class="options-container">
                                <div v-for="(option, index) in question.options" :key="index" class="option-item">
                                    <input
                                        v-model="question.options[index]"
                                        placeholder="Option"
                                        required
                                    />
                                    <button type="button" @click="deleteOption(index)">Delete</button>
                                </div>
                                <button type="button" @click="addOption">Add Option</button>
                            </div>
                            <div class="form-group">
                                <select v-model="question.answer" required>
                                    <option value="" disabled>Select Correct Answer</option>
                                    <option v-for="option in question.options" :key="option">{{ option }}</option>
                                </select>
                                <div class="form-buttons">
                                    <button type="submit">{{ isEditing ? 'Update' : 'Add' }}</button>
                                    <button type="button" @click="cancel">Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>  
                              
                    <div class="questions-list">
                        <h3>Questions List</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Question Text</th>
                                    <th>Options</th>
                                    <th>Answer</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="question in questions" :key="question.id">
                                    <td>{{ question.id }}</td>
                                    <td>{{ question.question_text }}</td>
                                    <td>{{ question.options.join(', ') }}</td>
                                    <td>{{ question.answer }}</td>
                                    <td>
                                        <button @click="editQuestion(question)">Edit</button>
                                        <button @click="deleteQuestion(question.id)">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <button class="close-button" @click="closeQuestionModal">Close</button>
                </div>
            </div>

            <h2>Dashboard</h2>
            <div class="admin-panel">
                <label for="department">Select Department:</label>
                <select v-model="selectedDepartment" id="department">
                    <option value="" disabled>Select a department</option>
                    <option value="Leadership">Leadership</option>
                    <option value="Developer and Product Development">Developer and Product Development</option>
                    <option value="Sales and Marketing, Finance, Admin">Sales and Marketing, Finance, Admin</option>
                    <option value="HR, Information Security, Training and TMG">HR, Information Security, Training and TMG</option>
                </select>

                <div class="upload-section">
                    <label for="fileUpload">Upload Colleagues Data (.xlsx):</label>
                    <input type="file" id="fileUpload" @change="handleFileUpload" />
                    <button @click="uploadColleaguesData">Upload</button>
                </div>
            </div>
        
            <button @click="sendPhishingEmails">Send Phishing Email</button>
            <button @click="downloadReport">Download Performance Report</button>
            <button @click="emailedCandidatesReport">Generate Emailed Candidates Report</button>
        
            <button @click="sendReminder" class="sending-reminder-button">Send Reminder</button>
            <h2>Candidate Reports</h2>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Colleague Name</th>
                        <th>Link Clicked</th>
                        <th>Training Completed</th>
                        <th>Correct Answers</th>
                        <th>Score (out of 100)</th> -->
                        <!-- <th>Download Report</th> -->
                        <!-- <th>Status</th>
                        <th>Training Attepted Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="report in reports" :key="report.id">
                        <td>{{ report.id }}</td>
                        <td>{{ getColleagueName(report.colleague_id) }}</td>
                        <td>{{ report.clicked ? 'Yes' : 'No' }}</td>
                        <td>{{ report.answered ? 'Yes' : 'No' }}</td>
                        <td>{{ calculateCorrectAnswers(report.answers) }}/{{ questions.length }}</td>
                        <td>{{ calculateScoreOutOf100(report.answers) }}%</td> -->
                        <!-- <td>
                            <button @click="downloadPDF(report.colleague_id)">Download PDF</button>
                        </td> -->
                        <!-- <td>{{ report.status }}</td> -->
                        <!-- <td>
                            <span> -->
                            <!-- Show status based on conditions -->
                            <!-- <span v-if="report.status === 'Completed'">Complete</span>
                            <span v-if="report.status === 'Pending'" class="pending-status"> -->
                                <!-- <button 
                                @click="sendReminder(report.id)"
                                style="margin-left: 10px;" -->
                                
                                <!-- Pending
                            </span>
                            </span>
                        </td>
                        <th>{{ formatDate(report.completion_date) }}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template> -->


<!-- <script>

export default {
    data() {
        return {
            reports: [],
            questions: [],
            colleagues: [],
            pollingInterval: null,
            isGenerating: false,
            file: null,
            showQuestionModal: false,
            selectedDepartment: '',
            isEditing: false,
            status: "Pending", -->
            // reportData: [],
            <!-- question: {
                id: null,
                question_text: '',
                options: ['', ''],
                answer: ''
            },
        };
    }, -->

    // created() {
    //     this.fetchReportData();
    // },

    <!-- methods: {

        formatDate(dateString) {
            if (!dateString) return 'N/A';
            const date = new Date(dateString);
            return date.toLocaleDateString('en-GB'); // Format as dd-mm-yyyy -->
        <!-- },

        logout() {
            fetch('http://127.0.0.1:5000/logout', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
            })
            .then(response => {
                if (response.ok) {
                localStorage.removeItem('token');
                this.$router.push('/');
                }
            })
            .catch(error => {
                console.error('Logout failed:', error);
            });
        }, -->

        <!-- async sendPhishingEmails() {
            if (!this.selectedDepartment) {
                alert("Please select a department before sending emails.");
                return;
            }

            try {
                const response = await fetch('http://127.0.0.1:5000/send_email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ department: this.selectedDepartment })
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                this.message = data.message;
                alert("Email Send to Candidates")
            } catch (error) {
                console.error('Failed to send emails:', error);
                this.message = 'Error sending emails. Please try again.';
            }
        },

        async fetchReports() {
            try {
                const response = await fetch('http://127.0.0.1:5000/reports');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                this.reports = data;
            } catch (error) {
                console.error('Failed to fetch reports:', error);
            }
        },

        async fetchQuestions() {
            try {
                const response = await fetch('http://127.0.0.1:5000/questions');
                const data = await response.json();
                this.questions = data;
            } catch (error) {
                console.error('Failed to fetch questions:', error);
            }
        },

        async fetchColleagues() {
            try {
                const response = await fetch('http://127.0.0.1:5000/users');
                const data = await response.json();
                this.colleagues = data;
            } catch (error) {
                console.error('Failed to fetch colleagues:', error);
            }
        },

        getColleagueName(colleagueId) {
            const colleague = this.colleagues.find(c => c.id === colleagueId);
            return colleague ? colleague.name : 'Unknown';
        },

        calculateCorrectAnswers(answers) {
            if (!Array.isArray(answers) || answers.length === 0) {
                return 0;
            }

            let correctAnswers = 0;
            answers.forEach((answer, index) => {
                if (this.isCorrect(index, answer)) {
                    correctAnswers++;
                }
            });
            return correctAnswers;
        },

        calculateScoreOutOf100(answers) {
            const correctAnswers = this.calculateCorrectAnswers(answers);
            const totalQuestions = this.questions.length;
            const scoreOutOf100 = (correctAnswers / totalQuestions) * 100;
            return scoreOutOf100.toFixed(2);
        },

        isCorrect(questionIndex, answer) {
            const question = this.questions[questionIndex];
            return question && question.answer === answer;
        },

        async downloadReport() {
            const response = await fetch('http://127.0.0.1:5000/generate_reports');
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'candidate_reports.csv';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        },

        async downloadPDF(colleagueId) {
            try {
                const response = await fetch(`http://127.0.0.1:5000/download_report/${colleagueId}`);
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = `report_${colleagueId}.pdf`;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            } catch (error) {
                console.error('Failed to download PDF report:', error);
            }
        },

        async emailedCandidatesReport() {
            if (this.isGenerating) return;
            this.isGenerating = true;
            this.stopPolling();

            try {
                const response = await fetch(`http://127.0.0.1:5000/generate_emailed_candidates_report`, {
                    method: 'GET'
                });

                if (response.ok) {
                    const blob = await response.blob();
                    const url = window.URL.createObjectURL(blob);
                    const link = document.createElement("a");
                    link.href = url;
                    link.setAttribute("download", "emailed_candidates_report.csv");
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                } else {
                    const errorData = await response.json();
                    alert(`Error: ${errorData.error || response.statusText}`);
                }
            } catch (error) {
                console.error("Error generating report:", error);
                alert("An error occurred while generating the report.");
            } finally {
                this.isGenerating = false;
                this.startPolling();
            }
        },

        handleFileUpload(event) {
            this.file = event.target.files[0];
        },

        async uploadColleaguesData() {
            if (!this.file) {
                alert("Please select a file.");
                return;
            }

            const formData = new FormData();
            formData.append('file', this.file);

            try {
                const response = await fetch('http://127.0.0.1:5000/upload_colleagues_data', {
                method: 'POST',
                body: formData,
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                alert("Colleagues data updated successfully!");
            } catch (error) {
                console.error("Error uploading data:", error);
                alert("Failed to upload data. Please try again.");
            }
        },

        startPolling() {
            this.fetchReports();
            this.pollingInterval = setInterval(async () => {
                if (!this.isGenerating) {
                    await this.fetchReports();
                }
            }, 5000);
        },

        stopPolling() {
            clearInterval(this.pollingInterval);
        },

        openQuestionModal() {
            this.showQuestionModal = true;
            this.fetchQuestions();
        },

        closeQuestionModal() {
            this.showQuestionModal = false;
            this.resetQuestionForm();
        },

        resetQuestionForm() {
            this.isEditing = false;
            this.question = {
                id: null,
                question_text: '',
                options: ['', ''],
                answer: ''
            };
        }, -->

        <!-- async fetchQuestions() {
            try {
                const response = await fetch('http://127.0.0.1:5000/questions');
                const data = await response.json();
                this.questions = data;
            } catch (error) {
                console.error('Failed to fetch questions:', error);
            }
        },

        async addQuestion() {
            const response = await fetch('http://127.0.0.1:5000/questions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.question)
            });
            await response.json();
            this.fetchQuestions();
            this.resetForm();
        },

        async editQuestion(question) {
            this.currentQuestionId = question.id;
            this.question = { ...question };

            if (!Array.isArray(this.question.options)) {
                this.question.options = [];
            }

            this.isEditing = true;
            this.showQuestionForm = true;
        },

        async updateQuestion() {
            if (!this.currentQuestionId) {
                alert('No question selected for updating.');
                return;
            }

            const response = await fetch(`http://127.0.0.1:5000/questions/${this.currentQuestionId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.question)
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error updating question:', errorData);
                alert(`Error: ${errorData.error || 'Something went wrong!'}`);
                return;
            }

            const data = await response.json();
            console.log('Success:', data.message);
            this.fetchQuestions();
            this.resetForm();
        },


        async editQuestion(question) {
            this.currentQuestionId = question.id;
            console.log('Editing Question ID:', this.currentQuestionId);
            this.question = { ...question };

            if (!Array.isArray(this.question.options)) {
                this.question.options = [];
            }

            this.isEditing = true;
            this.showQuestionForm = true;
        },

        async deleteQuestion(id) {
            await fetch(`http://127.0.0.1:5000/questions/${id}`, {
                method: 'DELETE'
            });
            this.fetchQuestions();
        }, -->

        <!-- resetForm() {
            this.question = {
                question_text: '',
                options: ['', ''],
                answer: ''
            };
            this.isEditing = false;
            this.currentQuestionId = null;
        },

        addOption() {
            if (Array.isArray(this.question.options)) {
                if (this.question.options.length < 4) {
                    this.question.options.push('');
                } else {
                    alert('You can only add up to 4 options.');
                }
            } else {
                console.error("Options is not defined or is not an array");
            }
        },

        deleteOption(index) {
            if (this.question.options.length > 2) {
                this.question.options.splice(index, 1);
            } else {
                alert('You must have at least 2 options.');
            }
        }, -->

        <!-- cancel() {
            this.resetQuestionForm();
        }, -->
        
        <!-- // async sendReminder() {
        //     try {
        //         const response = await fetch(`http://127.0.0.1:5000/send_reminder/${reportId}`, {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        //         });
        //         const data = await response.json();
        //         if (response.ok) {
        //         alert(data.message);
        //         } else {
        //         alert(data.error);
        //         }
        //     } catch (error) {
        //         console.error("Error sending reminder:", error);
        //     }
        // }

        // async sendReminder() {
        //     try {
        //         const pendingReports = this.reports.filter(report => report.status === 'Pending');
        //         for (const report of pendingReports) {
        //             await fetch(`http://127.0.0.1:5000/send_reminder/${report.id}`, {
        //                 method: 'POST',
        //                 headers: {
        //                     'Content-Type': 'application/json',
        //                 }
        //             });
        //         }
        //         alert('Reminders sent to all pending reports.');
        //     } catch (error) {
        //         console.error('Error sending reminders:', error);
        //         alert('Failed to send reminders. Please try again.');
        //     }
        // },

    //     fetchReportData() {
    //   // Fetch the report data from the backend API
    //   fetch('/generate_report')
    //     .then(response => response.json())
    //     .then(data => {
    //       this.reportData = data;
    //     })
    //     .catch(error => console.error("Error fetching report data:", error));
    // }
    }, -->

    <!-- async mounted() {
        await this.fetchReports();
        await this.fetchQuestions();
        await this.fetchColleagues();
        this.startPolling();
    },

    beforeDestroy() {
        this.stopPolling();
    },

    
};
</script> -->

<!-- <style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background-image: linear-gradient(to right, #f0f9ff, #cbebff);
    color: #333;
    padding-top: 80px;
}


.logo {
    height: 40px;
    margin-right: 1rem;
    filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.2));
}

.nav-links li {
    margin-left: 20px;
}

.nav-links a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    transition: color 0.3s ease, font-weight 0.3s ease;
}

.nav-links a:hover {
    color: #c2e8a7;
    font-weight: bold;
}

.main-content {
    margin-top: 20px;
    padding: 40px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    background-repeat: no-repeat;
    background-size: cover;
}


table {
    width: 100%;
    border-collapse: collapse;
    background-color: #f8fafc;
}

table th,
table td {
    padding: 12px;
    text-align: left;
    font-size: 14px;
    border: 1px solid #ddd;
}

table th {
    background-color: #c2e8a7;
    font-weight: bold;
}


@media (max-width: 768px) {
    .main-content {
        width: 95%;
        padding: 20px;
    }

    table,
    th,
    td {
        font-size: 14px;
        padding: 10px;
    }

    button {
        padding: 10px 20px;
        font-size: 16px;
    }
}

.admin-panel {
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin: 1rem 0;
}

h1 {
    font-size: 24px;
    margin-bottom: 20px;
}

label {
    margin-right: 10px;
}

select {
    padding: 5px;
    margin-bottom: 20px;
}

.message {
    margin-top: 20px;
    color: green;
}



.navbar-brand {
    display: flex;
    align-items: center;
}

.questions-list {
    max-height: 300px;
    overflow-y: auto;
}


.navbar-buttons {
    margin-left: auto;
}

.close-button {
    padding: 6px 12px;
    font-size: 12px;
    border-radius: 4px;
    background-image: linear-gradient(to right, #f64f4f, #e53935);
    color: white;
    background-color: #f44336;
}

.modal-content h3 {
     font-size: 18px;
    margin-bottom: 6px;
    text-transform: uppercase;
}

.modal-content form {
    display: flex;
    flex-direction: column;
}

.modal-content input[type="text"],
.modal-content select {
    padding: 10px;
    font-size: 14px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
}

.modal-content input::placeholder {
    color: #999;
}

.modal-content button {
    padding: 10px 20px;
    font-size: 14px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.modal-content button::before {
    content: "✓ ";
}

.modal-content button:hover {
    background-image: linear-gradient(to right, #f44336, #d32f2f);
}

.modal-content .close-button {
    background-color: #f44336;
}

.modal-content .close-button:hover {
    background-color: #d32f2f;
}


.modal-content button[type="button"]:hover {
    background-color: #218838;
}

.modal-content input[type="text"] {
    font-size: 14px;
    padding: 8px;
}

.modal-content input::placeholder {
    font-size: 12px;
    color: #888;
}

.questions-list table {
    width: 100%;
    border-collapse: collapse;
}

.questions-list th,
.questions-list td {
    padding: 10px;
    border: 1px solid #ddd;
}

.questions-list th {
    background-color: #f4f4f4;
    font-size: 14px;
}

.questions-list td {
    font-size: 13px;
}

.questions-list button {
    padding: 8px 12px;
    font-size: 12px;
    background-color: #0f78c8;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    min-width: 70px;
}

.questions-list h3 {
    margin-top: 1px;
    margin-bottom: 5px;
}

.questions-list button:hover {
    background-color: #57a015;
}

.options-container {
    display: flex;
        margin-bottom: 0rem;
    flex-wrap: wrap;
        gap: 10px;
}

.option-item {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    gap:5px;
    flex:1;
}

.form-group {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    position: relative;
    margin-top: 6px;
}

.form-group select {
       padding: 10px;
    font-size: 13px;
    border-radius: 8px;
    width: 200px;
    border: 1px solid #8d8d8d;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    color: #333;
    cursor: pointer;
    transition: border-color 0.3s ease;
    background-repeat: no-repeat;
    background-position: right 10px center;
}

.form-group select:hover {
    border-color: #26c8bb;
}

.form-group select:focus {
    outline: none;
    border-color: #69b820;
    box-shadow: 0 0 5px rgba(105, 184, 32, 0.5);
}

.select-label {
    font-weight: bold;
    font-size: 18px;
    margin-right: 12px;
    color: #4d4d4d;
}

.form-buttons {
    display: flex;
    gap: 10px;
    margin-left: 10px;
}

.select-department-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;
    margin-bottom: 10px;
}

.select-department-label {
    font-weight: bold;
    color: #333;
    margin-bottom: 8px;
    text-align: center;
}

.select-department {
    appearance: none;
    padding: 12px 16px;
    font-size: 16px;
    border: 2px solid #5680c1;
    border-radius: 8px;
    background-color: #f7f7f7;
    color: #333;
    position: relative;
    cursor: pointer;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    width: 100%;
    max-width: 300px;
}

.select-department:focus,
.select-department:hover {
    border-color: #5680c1;
    background-color: #e3f7f3;
    box-shadow: 0 0 8px rgba(38, 200, 187, 0.3);
    outline: none;
}
.select-department::after {
    content: "▼";
    font-size: 12px;
    color: #666;
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
}
.select-department option {
    padding: 10px;
    background-color: #ffffff;
    color: #333;
    transition: background-color 0.2s ease;
}

.select-department option:hover {
    background-color: #26c8bb;
    color: #fff;
}

.candidate {
    padding: 10px;
}

.sending-reminder-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 10px;
    border-radius: 5px;
    cursor: pointer;
}

.sending-reminder-button:hover {
    background-color: #0056b3;
}

.pending-status {
    color: rgb(232, 15, 15);
    font-weight: bold;
}

</style> -->



<template>
    <div>
        <nav class="navbar">
            <div class="navbar-brand">
                <!-- <img src="Xploit2Secure.jpeg" alt="Logo" class="logo" /> -->
                <img src="Xploit2Secure.png" alt="Logo" class="logo" />
                <div class="navbar-buttons">
                    <button @click="openQuestionModal">Manage Questions</button>
                    <button @click="logout">Logout</button>
                </div>
            </div>
        </nav>

        <div>
            <div v-if="showQuestionModal" class="modal">
                <div class="modal-content">
                    <div class="add-question-modal">
                     <button class="close-modal" @click="closeQuestionModal">X</button>
                        <h3>{{ isEditing ? 'Edit Question' : 'Add Question' }}</h3>
                        <form @submit.prevent="isEditing ? updateQuestion() : addQuestion()">
                            <input v-model="question.question_text" placeholder="Question Text" required />
                            <div class="options-container">
                                <div v-for="(option, index) in question.options" :key="index" class="option-item">
                                    <input v-model="question.options[index]" placeholder="Option" required />
                                    <button type="button" @click="deleteOption(index)">Delete</button>
                                </div>
                            </div>
                             <button type="button" @click="addOption">Add Option</button>
                            <div class="form-group">
                                <select v-model="question.answer" required>
                                    <option value="" disabled>Select Correct Answer</option>
                                    <option v-for="option in question.options" :key="option">{{ option }}</option>
                                </select>
                                <div class="form-buttons">
                                    <button type="submit">{{ isEditing ? 'Update' : 'Add' }}</button>
                                    <button type="button" @click="cancel">Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="questions-list">
                        <h3>Questions List</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Question Text</th>
                                    <th>Options</th>
                                    <th>Answer</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="question in questions" :key="question.id">
                                    <td>{{ question.id }}</td>
                                    <td>{{ question.question_text }}</td>
                                    <td>{{ question.options.join(', ') }}</td>
                                    <td>{{ question.answer }}</td>
                                    <td>
                                        <button @click="editQuestion(question)">Edit</button>
                                        <button @click="deleteQuestion(question.id)">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                   
                </div>
            </div>

         <!--   <h2 class="candidate">Dashboard</h2> -->

            <div class="select-department-container">
                <select id="department" class="select-department" v-model="selectedDepartment">
                    <option value="" disabled>Select Department</option>
                    <option value="Leadership">Leadership</option>
                    <option value="Developer and Product Development">Developer and Product Development</option>
                    <option value="Sales and Marketing, Finance, Admin">Sales and Marketing, Finance, Admin</option>
                    <option value="HR, Information Security, Training and TMG">HR, Information Security, Training and TMG</option>
                </select>

                <div class="upload-section">
                    <label for="fileUpload">Upload Colleagues Data (.xlsx):</label>
                    <input type="file" id="fileUpload" @change="handleFileUpload" />
                    <button @click="uploadColleaguesData">Upload</button>
                    <button @click="deleteColleaguesData" style="background-color: red;">Delete</button>
                </div>
            </div>

        
            <button @click="sendPhishingEmails">Send Phishing Email</button>
            <button @click="downloadReport">Download Performance Report</button>
            <button @click="downloadReportPdf">Download Complete Report</button>
            <button @click="emailedCandidatesReport">Generate Emailed Candidates Report</button>       
            <button @click="sendReminder" class="sending-reminder-button">Send Reminder</button>

            <h2 class="candidate">Candidate Reports</h2>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Colleague Name</th>
                        <th>Link Clicked</th>
                        <th>Training Completed</th>
                        <th>Correct Answers</th>
                        <th>Score (out of 100)</th>
                        <th>Status</th>
                        <th>Training Attempted Date</th>
                        <th>Certificate</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="report in reports" :key="report.id">
                        <td>{{ report.id }}</td>
                        <td>{{ getColleagueName(report.colleague_id) }}</td>
                        <td>{{ report.clicked ? 'Yes' : 'No' }}</td>
                        <td>{{ report.answered ? 'Yes' : 'No' }}</td>
                        <td>{{ calculateCorrectAnswers(report.score) }}/{{ report.answers.length }}</td>
                        <td>{{ report.score }}%</td>
                        <td>
                            <span>
                            <!-- Show status based on conditions -->
                            <span v-if="report.status === 'Completed'">Complete</span>
                                <span v-if="report.status === 'Pending'" class="pending-status">Pending</span>
                            </span>
                        </td>
                        <td>{{ formatDate(report.completion_date) }}</td>
                        <td>
                            <button 
                                v-if="report.status === 'Completed' && report.score >= 70"
                                @click="downloadCertificate(report.colleague_id)"
                            >
                                Download
                            </button>
                            <span v-else>-</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>


<script>

export default {
    data() {
        return {
            reports: [],
            questions: [],
            colleagues: [],
            pollingInterval: null,
            isGenerating: false,
            file: null,
            showQuestionModal: false,
            selectedDepartment: '',
            isEditing: false,
            status: "Pending",
            question: {
                id: null,
                question_text: '',
                options: ['', ''],
                answer: ''
            },
        };
    },

    methods: {
        
        formatDate(dateString) {
            if (!dateString) return 'N/A';
            const date = new Date(dateString);
            // return date.toLocaleDateString('en-GB'); // Format as dd-mm-yyyy
            // return `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()}`;

            const day = date.getUTCDate().toString().padStart(2, '0');
            const month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
            const year = date.getUTCFullYear();
            return `${day}-${month}-${year}`; // Format as dd-mm-yyyy
        },

        logout() {
            // fetch('http://127.0.0.1:5000/logout', {
            fetch('http://35.182.29.153/api/logout', {
            // fetch('https://phishing-application-demo.onrender.com/logout', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
            })
            .then(response => {
                if (response.ok) {
                localStorage.removeItem('token');
                this.$router.push('/');
                }
            })
            .catch(error => {
                console.error('Logout failed:', error);
            });
        },

        async sendPhishingEmails() {
            if (!this.selectedDepartment) {
                alert("Please select a department before sending emails.");
                return;
            }

            try {
                // const response = await fetch('http://127.0.0.1:5000/send_email', {
                const response = await fetch('http://35.182.29.153/api/send_email', {
                // const response = await fetch('https://phishing-application-demo.onrender.com/send_email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ department: this.selectedDepartment })
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                this.message = data.message;
                alert("Email Send to Candidates")
            } catch (error) {
                console.error('Failed to send emails:', error);
                this.message = 'Error sending emails. Please try again.';
            }
        },

        async downloadReport() {
            // const response = await fetch('http://127.0.0.1:5000/generate_reports');
            const response = await fetch('http://35.182.29.153/api/generate_reports');
            // const response = await fetch('https://phishing-application-demo.onrender.com/generate_reports');
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'candidate_reports.csv';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        },

        // async fetchReports() {
        //     try {
        //         const response = await fetch('http://127.0.0.1:5000/reports');
        //         if (!response.ok) {
        //             throw new Error(`HTTP error! Status: ${response.status}`);
        //         }
        //         const data = await response.json();
        //         this.reports = data;
        //     } catch (error) {
        //         console.error('Failed to fetch reports:', error);
        //     }
        // },

        async fetchReports() {
            try {
                // const response = await fetch('http://127.0.0.1:5000/get_all_reports');
                const response = await fetch('http://35.182.29.153/api/get_all_reports');
                // const response = await fetch('https://phishing-application-demo.onrender.com/get_all_reports');
                if (!response.ok) {
                    throw new Error('Failed to fetch reports');
                }
                const data = await response.json();
                this.reports = data.reports;  // Assuming 'reports' is the key in the response
            } catch (error) {
                console.error('Error fetching reports:', error);
            }
        },


        async fetchQuestions() {
            try {
                // const response = await fetch('http://127.0.0.1:5000/questions');
                const response = await fetch('http://35.182.29.153/api/questions');
                // const response = await fetch('https://phishing-application-demo.onrender.com/questions');
                const data = await response.json();
                this.questions = data;
            } catch (error) {
                console.error('Failed to fetch questions:', error);
            }
        },

        async fetchColleagues() {
            try {
                // const response = await fetch('http://127.0.0.1:5000/users');
                const response = await fetch('http://35.182.29.153/api/users');
                // const response = await fetch('https://phishing-application-demo.onrender.com/users');
                const data = await response.json();
                this.colleagues = data;
            } catch (error) {
                console.error('Failed to fetch colleagues:', error);
            }
        },

        getColleagueName(colleagueId) {
            const colleague = this.colleagues.find(c => c.id === colleagueId);
            return colleague ? colleague.name : 'Unknown';
        },

        // calculateCorrectAnswers(answers) {
        //     if (!Array.isArray(answers) || answers.length === 0) {
        //         return 0;
        //     }

        //     let correctAnswers = 0;
        //     answers.forEach((answer, index) => {
        //         if (this.isCorrect(index, answer)) {
        //             correctAnswers++;
        //         }
        //     });
        //     return correctAnswers;
        // },

        calculateCorrectAnswers(score) {
    if (typeof score !== 'number' || isNaN(score)) {
        return 0; // If score is not a valid number, return 0
    }

    // Calculate the correct number of answers by dividing the score by 10
    const correctAnswers = Math.round(score / 10);

    return correctAnswers;
},

        calculateScoreOutOf100(answers) {
            const correctAnswers = this.calculateCorrectAnswers(answers);
            const totalQuestions = this.questions.length;
            const scoreOutOf100 = (correctAnswers / totalQuestions) * 100;
            return scoreOutOf100.toFixed(2);
        },

        isCorrect(questionIndex, answer) {
            const question = this.questions[questionIndex];
            return question && question.answer === answer;
        },

        async emailedCandidatesReport() {
            if (this.isGenerating) return;
            this.isGenerating = true;
            this.stopPolling();

            try {
                // const response = await fetch(`http://127.0.0.1:5000/generate_emailed_candidates_report`, {
                const response = await fetch(`http://35.182.29.153/api/generate_emailed_candidates_report`, {
                // const response = await fetch(`https://phishing-application-demo.onrender.com/generate_emailed_candidates_report`, {
                    method: 'GET'
                });

                if (response.ok) {
                    const blob = await response.blob();
                    const url = window.URL.createObjectURL(blob);
                    const link = document.createElement("a");
                    link.href = url;
                    link.setAttribute("download", "emailed_candidates_report.csv");
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                } else {
                    const errorData = await response.json();
                    alert(`Error: ${errorData.error || response.statusText}`);
                }
            } catch (error) {
                console.error("Error generating report:", error);
                alert("An error occurred while generating the report.");
            } finally {
                this.isGenerating = false;
                this.startPolling();
            }
        },

        startPolling() {
            this.fetchReports();
            this.pollingInterval = setInterval(async () => {
                if (!this.isGenerating) {
                    await this.fetchReports();
                }
            }, 5000);
        },

        async uploadColleaguesData() {
            if (!this.file) {
                alert("Please select a file.");
                return;
            }

            const formData = new FormData();
            formData.append('file', this.file);

            try {
                // const response = await fetch('http://127.0.0.1:5000/upload_colleagues_data', {
                const response = await fetch('http://35.182.29.153/api/upload_colleagues_data', {
                // const response = await fetch('https://phishing-application-demo.onrender.com/upload_colleagues_data', {
                method: 'POST',
                body: formData,
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                alert("Colleagues data updated successfully!");
            } catch (error) {
                console.error("Error uploading data:", error);
                alert("Failed to upload data. Please try again.");
            }
        },

        handleFileUpload(event) {
            this.file = event.target.files[0];
        },

        stopPolling() {
            clearInterval(this.pollingInterval);
        },

        openQuestionModal() {
            this.showQuestionModal = true;
            this.fetchQuestions();
        },

        closeQuestionModal() {
            this.showQuestionModal = false;
            this.resetQuestionForm();
        },

        resetQuestionForm() {
            this.isEditing = false;
            this.question = {
                id: null,
                question_text: '',
                options: ['', ''],
                answer: ''
            };
        },

        async fetchQuestions() {
            try {
                // const response = await fetch('http://127.0.0.1:5000/questions');
                const response = await fetch('http://35.182.29.153/api/questions');
                // const response = await fetch('https://phishing-application-demo.onrender.com/questions');
                const data = await response.json();
                this.questions = data;
            } catch (error) {
                console.error('Failed to fetch questions:', error);
            }
        },

        async addQuestion() {
            // const response = await fetch('http://127.0.0.1:5000/questions', {
            const response = await fetch('http://35.182.29.153/api/questions', {
            // const response = await fetch('https://phishing-application-demo.onrender.com/questions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.question)
            });
            await response.json();
            this.fetchQuestions();
            this.resetForm();
        },

        async editQuestion(question) {
            this.currentQuestionId = question.id;
            this.question = { ...question };

            if (!Array.isArray(this.question.options)) {
                this.question.options = [];
            }

            this.isEditing = true;
            this.showQuestionForm = true;
        },

        async updateQuestion() {
            if (!this.currentQuestionId) {
                alert('No question selected for updating.');
                return;
            }

            // const response = await fetch(`http://127.0.0.1:5000/questions/${this.currentQuestionId}`, {
            const response = await fetch(`http://35.182.29.153/api/questions/${this.currentQuestionId}`, {
            // const response = await fetch(`https://phishing-application-demo.onrender.com/questions/${this.currentQuestionId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.question)
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error updating question:', errorData);
                alert(`Error: ${errorData.error || 'Something went wrong!'}`);
                return;
            }

            const data = await response.json();
            console.log('Success:', data.message);
            this.fetchQuestions();
            this.resetForm();
        },

        async deleteQuestion(id) {
            // await fetch(`http://127.0.0.1:5000/questions/${id}`, {
            await fetch(`http://35.182.29.153/api/questions/${id}`, {
            // await fetch(`https://phishing-application-demo.onrender.com/questions/${id}`, {
                method: 'DELETE'
            });
            this.fetchQuestions();
        },

        resetForm() {
            this.question = {
                question_text: '',
                options: ['', ''],
                answer: ''
            };
            this.isEditing = false;
            this.currentQuestionId = null;
        },

        addOption() {
            if (Array.isArray(this.question.options)) {
                if (this.question.options.length < 4) {
                    this.question.options.push('');
                } else {
                    alert('You can only add up to 4 options.');
                }
            } else {
                console.error("Options is not defined or is not an array");
            }
        },

        deleteOption(index) {
            if (this.question.options.length > 2) {
                this.question.options.splice(index, 1);
            } else {
                alert('You must have at least 2 options.');
            }
        },

        cancel() {
            this.resetQuestionForm();
        },

        // async sendReminder() {
        //     try {
        //         const response = await fetch(`https://phishing-mail-application.onrender.com/send_reminder/${reportId}`, {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        //         });
        //         const data = await response.json();
        //         if (response.ok) {
        //         alert(data.message);
        //         } else {
        //         alert(data.error);
        //         }
        //     } catch (error) {
        //         console.error("Error sending reminder:", error);
        //     }
        // }

        async sendReminder() {
            try {
                const pendingReports = this.reports.filter(report => report.status === 'Pending');
                for (const report of pendingReports) {
                    // await fetch(`http://127.0.0.1:5000/send_reminder/${report.id}`, {
                    await fetch(`http://35.182.29.153/api/send_reminder/${report.id}`, {
                    // await fetch(`https://phishing-application-demo.onrender.com/send_reminder/${report.id}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });
                }
                alert('Reminders sent to all pending reports.');
            } catch (error) {
                console.error('Error sending reminders:', error);
                alert('Failed to send reminders. Please try again.');
            }
        },

        async deleteColleaguesData() {
            if (!confirm("Are you sure you want to delete all colleagues? This action cannot be undone.")) {
                return;
            }

            try {
                // const response = await fetch('http://127.0.0.1:5000/delete_colleagues_data', {
                const response = await fetch('http://35.182.29.153/api/delete_colleagues_data', {
                // const response = await fetch('https://phishing-application-demo.onrender.com/delete_colleagues_data', {
                    method: 'DELETE'
                });

                if (response.ok) {
                    const data = await response.json();
                    alert(data.message);
                    // Optionally, clear the colleagues list in the frontend
                    this.colleagues = [];
                } else {
                    const errorData = await response.json();
                    alert(errorData.error || "Failed to delete colleagues.");
                }
            } catch (error) {
                console.error("Error deleting colleagues:", error);
                alert("An error occurred while deleting colleagues.");
            }
        },

        async downloadCertificate(colleagueId) {
            try {
                // const response = await fetch(`http://127.0.0.1:5000/download-certificate/${colleagueId}`, {
                const response = await fetch(`http://35.182.29.153/api/download-certificate/${colleagueId}`, {
                // const response = await fetch(`https://phishing-application-demo.onrender.com/download-certificate/${colleagueId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/pdf',
                    },
                });

                if (response.ok) {
                    const blob = await response.blob();
                    const url = window.URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', `Certificate_${colleagueId}.pdf`);
                    document.body.appendChild(link);
                    link.click();
                    link.remove();
                } else {
                    const errorData = await response.json();
                    alert(errorData.error || "Failed to download the certificate.");
                }
            } catch (error) {
                console.error("Error downloading certificate:", error);
                alert("An error occurred while downloading the certificate.");
            }
        },

        async downloadReportPdf() {
            try {
                // const response = await fetch('http://127.0.0.1:5000/generate_reports_pdf');
                const response = await fetch('http://35.182.29.153/api/generate_reports_pdf');
                if (!response.ok) throw new Error('Failed to fetch PDF report');

                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);

                const link = document.createElement('a');
                link.href = url;
                link.download = 'Phishing_Simulation_Report.pdf';
                link.click();

                window.URL.revokeObjectURL(url);
            } catch (error) {
                console.error('Error downloading report:', error);
                alert('Could not download PDF report at this time.');
            }
        }
    },

    async mounted() {
        await this.fetchReports();
        await this.fetchQuestions();
        await this.fetchColleagues();
        this.startPolling();
    },

    beforeDestroy() {
        this.stopPolling();
    },
};
</script>


<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background-image: linear-gradient(to right, #f0f9ff, #cbebff);
    color: #333;
    padding-top: 80px;
}


.logo {
    height: 40px;
    margin-right: 1rem;
    filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.2));
}

.nav-links li {
    margin-left: 20px;
}

.nav-links a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    transition: color 0.3s ease, font-weight 0.3s ease;
}

.nav-links a:hover {
    color: #c2e8a7;
    font-weight: bold;
}

.main-content {
    margin-top: 20px;
    padding: 40px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    background-repeat: no-repeat;
    background-size: cover;
}

h2 {
    font-size: 28px;
    color: #444;
    padding-bottom: 15px;
}

button {
    padding: 8px 14px;
    font-size: 14px;
    background-image: linear-gradient(to right, #4f72a9, #114ba4);
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 6px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
}

button:hover {
    background-image: linear-gradient(to right, #114ba4, #4f72a9);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

table {
    width: 100%;
    border-collapse: collapse;
    background-color: #f8fafc;
}

table th,
table td {
    padding: 12px;
    text-align: left;
    font-size: 14px;
    border: 1px solid #ddd;
}

table th {
     background-color: #cadfff;
    font-weight: bold;
}

tbody tr:nth-child(even) {
    background-color: #f1f1f1;
}

tbody tr:hover {
    background-color: #eff5ff;
    transition: background 0.3s ease;
}


@media (max-width: 768px) {
    .main-content {
        width: 95%;
        padding: 20px;
    }

    table,
    th,
    td {
        font-size: 14px;
        padding: 10px;
    }

    button {
        padding: 10px 20px;
        font-size: 16px;
    }
}

.admin-panel {
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin: 1rem 0;
}

h1 {
    font-size: 24px;
    margin-bottom: 20px;
}

label {
    margin-right: 10px;
}

select {
    padding: 5px;
    margin-bottom: 20px;
}
.option-item>button {
    position: relative;
    top: -4px;
}
.message {
    margin-top: 20px;
    color: green;
}

.upload-section {
    margin: 0.5rem 0;
     border: 1px solid #1f3557;
    padding: 20px;
    border-radius: 4px;
}


.navbar {
    background-color: #1f3557;
    color: white;
    padding: 0.5rem 1rem;
    position: relative;
    z-index: 100;
    margin-bottom:20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}
.navbar-brand {
    display: flex;
    align-items: center;
}
.add-question-modal input {
    padding: 8px;
    margin-bottom: 8px;
    border-radius: 6px;
    border: 1px solid #8d8d8d;
}

.modal-content {
    max-height: 80vh;
}

.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 10px 20px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    z-index: 1200;
    width: 800px;
    border: 1px solid #26c8bb;
    height:90vh;
}

.questions-list {
    max-height: 190px;
    overflow-y: auto;
}


.navbar-buttons {
    margin-left: auto;
}

.navbar-buttons button {
    margin-left: auto;
}
.close-modal:before {
    display: none !important;
}
.close-button {
    padding: 6px 12px;
    font-size: 12px;
    border-radius: 4px;
    background-image: linear-gradient(to right, #f64f4f, #e53935);
    color: white;
    background-color: #f44336;
}
.close-modal {
   position: absolute;
    right: 6px;
    top: 6px;
    border-radius: 50px !important;
    width: 24px !important;
    height: 24px !important;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0 !important;
}
.modal-content h3 {
    font-size: 18px;
    margin-bottom: 6px;
    text-transform: uppercase;
}

.modal-content form {
    display: flex;
    flex-direction: column;
}

.modal-content input[type="text"],
.modal-content select {
    padding: 10px;
    font-size: 14px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
}

.modal-content input::placeholder {
    color: #999;
}

.modal-content button {
    padding: 10px 20px;
    font-size: 14px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.modal-content button::before {
    content: "✓ ";
}

.modal-content button:hover {
    background-image: linear-gradient(to right, #f44336, #d32f2f);
}

.modal-content .close-button {
    background-color: #f44336;
}

.modal-content .close-button:hover {
    background-color: #d32f2f;
}

.modal-content button[type="button"] {
    font-size: 12px;
    padding: 8px;
    background-color: #28a745;
   margin: 0;
    
}

.modal-content button[type="button"]:hover {
    background-color: #218838;
}

.modal-content input[type="text"] {
    font-size: 14px;
    padding: 8px;
}

.modal-content input::placeholder {
    font-size: 12px;
    color: #888;
}

.questions-list table {
    width: 100%;
    border-collapse: collapse;
}

.questions-list th,
.questions-list td {
    padding: 10px;
    border: 1px solid #ddd;
}

.questions-list th {
    background-color: #f4f4f4;
    font-size: 14px;
}

.questions-list td {
    font-size: 13px;
}

.questions-list button {
    padding: 8px 12px;
    font-size: 12px;
    background-color: #0f78c8;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    min-width: 70px;
}

.questions-list h3 {
    margin-top: 1px;
    margin-bottom: 5px;
}

.questions-list button:hover {
    background-color: #57a015;
}

.options-container {
    display: flex;
        margin-bottom: 0rem;
    flex-wrap: wrap;
        gap: 10px;
}

.option-item {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    gap:5px;
    flex:1;
}

.option-item input {
    margin-right: 0.5rem;
    min-width: 296px;
}

.form-group {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    position: relative;
    margin-top: 6px;
}

.form-group select {
    padding: 10px;
    font-size: 13px;
    border-radius: 6px;
    width: 240px;
    border: 1px solid #8d8d8d;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    color: #333;
    cursor: pointer;
    transition: border-color 0.3s ease;
    background-repeat: no-repeat;
    background-position: right 10px center;
    margin-bottom:0;
}

.form-group select:hover {
    border-color: #26c8bb;
}

.form-group select:focus {
    outline: none;
    border-color: #69b820;
    box-shadow: 0 0 5px rgba(105, 184, 32, 0.5);
}

.select-label {
    font-weight: bold;
    font-size: 18px;
    margin-right: 12px;
    color: #4d4d4d;
}

.form-buttons {
    display: flex;
    gap: 10px;
    margin-left: 10px;
}
.form-buttons>button {
    margin: 0 !important;
    padding: 7px 20px !important;
    height: 34px;
}

.select-department-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;
    margin-bottom: 10px;
}

.select-department-label {
    font-weight: bold;
    color: #333;
    margin-bottom: 8px;
    text-align: center;
}

.select-department {
    appearance: none;
    padding: 12px 16px;
    font-size: 16px;
    border: 2px solid #5f8acc;;
    border-radius: 8px;
    background-color: #f7f7f7;
    color: #333;
    position: relative;
    cursor: pointer;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    width: 100%;
    max-width: 300px;
}

.select-department:focus,
.select-department:hover {
    border-color: #5f8acc;
    background-color: #e3eeff;;
    box-shadow: 0 0 8px rgb(31 53 87 / 30% 30% );

    outline: none;
}
.select-department::after {
    content: "▼";
    font-size: 12px;
    color: #666;
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
}
.select-department option {
    padding: 10px;
    background-color: #ffffff;
    color: #333;
    transition: background-color 0.2s ease;
}

.select-department option:hover {
    background-color: #26c8bb;
    color: #fff;
}

.candidate {
    padding: 10px;
}

.sending-reminder-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 10px;
    border-radius: 5px;
    cursor: pointer;
}

.sending-reminder-button:hover {
    background-color: #0056b3;
}

.pending-status {
    color: rgb(232, 15, 15);
    font-weight: bold;
}

</style>