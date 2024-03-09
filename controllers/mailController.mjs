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
    if (req?.params?.type === "allmail") {
      emails = await EmailModel.find({});
    } else if (req?.params?.type === "starred") {
      emails = await EmailModel.find({ starred: true });
    } else if (req?.params?.type === "trash") {
      emails = await EmailModel.find({ trash: true });
 
    } else {
      emails = await EmailModel.find({ type });
    }
    return res.status(200).json({ emails, success: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const saveDrafts = async (req, res) => {
  try {
    let drafts = await EmailModel.create(req.body);
    return res.status(200).json({ success: "Draft Saved", drafts });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Unable to save draft!" });
  }
};

export const moveEmailsToTrash = async (req, res) => {
  try {
    const mailIds = req.body;

    if (req?.params?.type === "trash") {
      await EmailModel.deleteMany({ _id: { $in: mailIds } });
      return res.status(200).json({ success: "Emails deleted from trash!" });
    } else {
      mailIds.forEach(async (mailId) => {
        await EmailModel.findByIdAndUpdate(mailId, {
          $set: {
            trash: true,
            starred: false,
            type:""
          },
        });
      });
      res.status(200).json({ success: "Emails moved to trash!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Unable to move emails to trash!" });
  }
};

export const getEmailDetails = async (req, res) => {
  try {
    const email = await EmailModel.findById(req.params.id);
    res.status(200).json({ email });
  } catch (error) {
    res.status(500).json({ message: "Unable to get email details!" });
  }
};
export const toggleStarredEmail = async (req, res) => {
  try {
    const { _id, starred } = req.body;

    const updatedMail = await EmailModel.findByIdAndUpdate(
      _id,
      {
        $set: { starred: !starred },
      },
      { new: true }
    );
    return res
      .status(200)
      .json({ success: "Email starred successfully!", updatedMail });
  } catch (error) {
    return res.status(500).json({ message: "Unable to star email!" });
  }
};
