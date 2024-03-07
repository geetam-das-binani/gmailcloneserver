import EmailModel from "../model/emailModel.mjs";

// ! Save email to database
export const saveSentEmail = async (req, res) => {
  try {
    const email = await EmailModel.create(req.body);
    res.status(201).json({
      success: "Email Saved Successfully",
      data: email,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getEmails = async (req, res) => {
  const { type } = req.params;

  try {
    let emails;
    emails = await EmailModel.find({ type });
    return res.status(200).json({ emails });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const saveDrafts = async (req, res) => {
  try {
    let drafts = await EmailModel.create(req.body);
    return res.status(200).json({ success: "Draft Saved", drafts });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// this is test draf mail 
// geetambinani6@gmail.com