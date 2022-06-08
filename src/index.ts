import  app  from "./controller/app";
import { LeaguerBusiness } from "./business/leaguerBusiness";
import { LeaguerController } from "./controller/leaguerController";
import { LeaguerDatabase}  from "./data/leaguerDatabase";
import System_userBusiness from "./business/System_userBusiness";
import System_userController from "./controller/System_userController";
import { System_userData } from "./data/System_userData";
import { FormBusiness } from "./business/formBusiness";
import { FormDatabase } from "./data/formDatabase";
import { FormController } from "./controller/formController";
import { QuestionsBusiness } from "./business/questionsBusiness";
import { QuestionsController } from "./controller/questionsController";
import { QuestionsDatabase } from "./data/questionsDatabase";
import EmailBusiness from "./business/emailBusiness";
import EmailController from "./controller/emailController";
import { EmailData } from "./data/EmailData";
import { Request, Response } from "express";
import { FinalAnwserUserBusiness } from "./business/finalAnwserBusiness";
import { FinalAnwserUserController } from "./controller/finalAnswerUserController";
import { FinalAnwserUserDatabase } from "./data/finalAnwserUserDatabase";
import TeamController from "./controller/TeamController";
import TeamBusiness from "./business/teamBusiness";
import { TeamData } from "./data/teamDatabase";



const leaguerBusiness = new LeaguerBusiness(new LeaguerDatabase);
const leaguerController = new LeaguerController(leaguerBusiness);

const formBusiness = new FormBusiness(new FormDatabase);
const formController = new FormController(formBusiness);

const questionsBusiness = new QuestionsBusiness(new QuestionsDatabase);
const questionsController = new QuestionsController(questionsBusiness);

const system_userBusiness = new System_userBusiness(new System_userData());
const system_userController = new System_userController(system_userBusiness);

const emailBusiness = new EmailBusiness(new EmailData)
const emailController = new EmailController(emailBusiness)

const finalAnwserUserBusiness = new FinalAnwserUserBusiness(new FinalAnwserUserDatabase)
const finalAnwserUserController = new FinalAnwserUserController(finalAnwserUserBusiness)
const teamBusiness = new TeamBusiness(new TeamData)
const teamController = new TeamController(teamBusiness)

export async function getHome(req: Request, res: Response): Promise<void>{
    res.status(200).send("ok funcionando")
}
app.get("/", getHome);

app.post("/answerfinal/signup", finalAnwserUserController.createFinalAnwserUser);
app.get("/answerfinal/:id", finalAnwserUserController.searchFinalAnswerById);
app.get("/answerfinal", finalAnwserUserController.searchAllFinalAnswer);



app.post("/questions/signup", questionsController.createQuestions);
app.delete("/questions/:id", questionsController.deleteQuestions);
app.get("/questions/:id", questionsController.searchQuestionsById);
app.put("/questions/:id", questionsController.updateQuestions);
app.get("/questions", questionsController.searchAllLeaguers);


app.post("/form/signup", formController.createForm);
app.post("/authentication", formController.authenticatorEmailForm);
app.delete("/form/:id", formController.deleteForm);
app.get("/form/:id", formController.searchFormById);
app.get("/form", formController.searchAllForm);
app.put("/form/update/:hashlink", formController.insertAnswerForm);
app.get("/form/answer/leaguer/:id", formController.searchLeaguerFormById);


app.delete("/profile/:id", leaguerController.deleteLeaguer);
app.post("/leaguer/signup", leaguerController.createLeaguer);
app.get("/profile/:id", leaguerController.searchLeaguerById);
app.get("/leaguer", leaguerController.searchAllLeaguers);
app.put("/profile/update/:id", leaguerController.updateLeaguers);


app.post("/signup", system_userController.signup);
app.post("/login", system_userController.login);

app.get("/leaguer/:responsible", system_userController.findSystemUserByLeaguer);
app.get("/user", system_userController.searchSystemUser)

app.post("/send", emailController.email)

app.post("/team/signup", teamController.signup)
app.get("/team/:id", teamController.searchTeamById)
app.get("/team", teamController.searchAllTeam)


