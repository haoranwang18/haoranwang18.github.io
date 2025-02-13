---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "<https://cdn.jsdelivr.net/gh/>" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "<https://raw.githubusercontent.com/>" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am a third-year Ph.D. candidate at Emory University advised by Dr. [Kai Shu](https://www.cs.emory.edu/~kshu5/). I obtained my M.S. degree in computer science from University of Oregon in 2021 (advised by Dr. [Thien Nguyen](https://ix.cs.uoregon.edu/~thien/)), and my B.S. degree in computer science from Purdue University in 2019 (working with Dr. [Yung-Hsiang Lu](https://yhlu.net/)).

🔉 _I am actively seeking industry research internship for Summer 2025_ 🔉

# 💡 Research Interests

My research involves building trustworthy AI systems, with a specific emphasis on enhancing both robustness and interpretability. I am broadly interested in fundamental research and interdisciplinary collaborations motivated by important applications, including detecting misinformation and analyzing social network.

# 🔥 News
- _2025.02_: &nbsp;🎉🎉 Research Access Program has been awarded. Thanks OpenAI!
- _2025.01_: &nbsp;🎉🎉 Fin-Fact has been accepted by [WWW 2025](https://arxiv.org/abs/2309.08793). Congratulations [Aman](https://amanrangapur.com/)!
- _2024.11_: &nbsp;🎉🎉 MMCV has been accepted by [COLING 2025](https://arxiv.org/abs/2411.09547).
- _2024.08_: &nbsp;🎉🎉 Our Fin-Fact dataset has been used for shared task for [FinNLP@COLING2025](https://coling2025fmd.thefin.ai/).
- _2024.07_: &nbsp;🎉🎉 TA2 has been accepted by [CIKM 2024](https://arxiv.org/abs/2311.09433).

<details>
<summary>Older News</summary>

- _2024.05_: &nbsp;🎉🎉 TrustLLM has been accepted by [ICML 2024](https://arxiv.org/pdf/2401.05561). Congratulations [Yue](https://howiehwong.github.io/)!
- _2024.02_: &nbsp;🎉🎉 Passed Ph.D. Qualifying Exam.
- _2023.10_: &nbsp;🎉🎉 FOLK has been accepted by [EMNLP2023](https://arxiv.org/abs/2310.05253).
- _2023.02_: &nbsp;🎉🎉 MARL has been accepted by [WWW2023](https://arxiv.org/abs/2302.07363).

</details>

# 📜 Selected Publications

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">COLING 2025</div><img src='images/coling25.png' alt="sym" width="80%"></div></div>
<div class='paper-box-text' markdown="1">

[Piecing It All Together: Verifying Multi-Hop Multimodal Claims](https://arxiv.org/abs/2411.09547)

**Haoran Wang**, Aman Rangapur, Xiongxiao Xu, Yueqing Liang, Haroon Gharwi, Carl Yang, Kai Shu

_Proceedings of the 31st International Conference on Computational Linguistics_

[![git](https://img.shields.io/github/stars/mmcv-dataset/MMCV)](https://github.com/mmcv-dataset/MMCV)
[![Leaderboard](https://img.shields.io/badge/Leaderboard-%F0%9F%9A%80-brightgreen)](https://mmcv-dataset.github.io/)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CIKM 2024</div><img src='images/cikm24.png' alt="sym" width="80%"></div></div>
<div class='paper-box-text' markdown="1">

[Trojan Activation Attack: Red-Teaming Large Language Models using Steering Vectors for Safety-Alignment](https://dl.acm.org/doi/10.1145/3627673.3679821)

**Haoran Wang**, Kai Shu

_Proceedings of the 33rd ACM International Conference on Information and Knowledge Management_

[![git](https://img.shields.io/github/stars/wang2226/Trojan-Activation-Attack)](https://github.com/wang2226/Trojan-Activation-Attack)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2024</div><img src='images/icml24.png' alt="sym" width="80%"></div></div>
<div class='paper-box-text' markdown="1">

[TrustLLM: Trustworthiness in Large Language Models](https://proceedings.mlr.press/v235/huang24x.html)

Yue Huang\*, Lichao Sun\*, **Haoran Wang\***, Siyuan Wu\*, Qihui Zhang\*, Chujie Gao\*, Yixin Huang\*, Wenhan Lyu\*, Yixuan Zhang\*, Xiner Li\*, Zhengliang Liu\*, Yixin Liu\*, Yijue Wang\*, Zhikun Zhang\*, Bhavya Kailkhura, Caiming Xiong, et al. (\*: major contribution).

_Proceedings of the Forty-first International Conference on Machine Learning_

[![git](https://img.shields.io/github/stars/HowieHwong/TrustLLM)](https://github.com/HowieHwong/TrustLLM)
[![hf](https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Daily%20Paper-gold)](https://huggingface.co/papers/2401.05561)
[![Website](https://img.shields.io/badge/Website-%F0%9F%8C%8D-blue)](https://trustllmbenchmark.github.io/TrustLLM-Website/)
[![Dataset](https://img.shields.io/badge/Dataset-%F0%9F%92%BE-green)](https://huggingface.co/datasets/TrustLLM/TrustLLM-dataset)
[![Leaderboard](https://img.shields.io/badge/Leaderboard-%F0%9F%9A%80-brightgreen)](https://trustllmbenchmark.github.io/TrustLLM-Website/leaderboard.html)
[![Toolkit Document](https://img.shields.io/badge/Toolkit%20Document-%F0%9F%93%9A-blueviolet)](https://howiehwong.github.io/TrustLLM/)
[![Downloads](https://static.pepy.tech/badge/trustllm)](https://pepy.tech/project/trustllm)
[![Metioned](https://img.shields.io/badge/Metioned%20By-DHS-red)](https://www.hsgac.senate.gov/wp-content/uploads/2024.06.11-Hedge-Fund-Use-of-AI-Report.pdf)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">EMNLP 2023</div><img src='images/emnlp23.png' alt="sym" width="80%"></div></div>
<div class='paper-box-text' markdown="1">

[Explainable Claim Verification via Knowledge-Grounded Reasoning with Large Language Models](https://aclanthology.org/2023.findings-emnlp.416/)

**Haoran Wang**, Kai Shu

_Findings of the Association for Computational Linguistics: EMNLP 2023_

[![git](https://img.shields.io/github/stars/wang2226/FOLK)](https://github.com/wang2226/FOLK)
[![appear](https://img.shields.io/badge/NILLI_Workshop-@EMNLP23-brown)](https://www.cs.mcgill.ca/~pparth2/nilli_workshop_2023/)
[![cisco](https://img.shields.io/badge/Mentioned%20By-Cisco%20Research-blue)](https://players.brightcove.net/1384193102001/vxm2GzY3qq_default/index.html?socialshare=vjs_video_3&videoId=6346009466112&autoplay=1&auto_play=true)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">WWW 2023</div><img src='images/www23.png' alt="sym" width="80%"></div></div>
<div class='paper-box-text' markdown="1">

[Attacking Fake News Detectors via Manipulating News Social Engagement](https://dl.acm.org/doi/10.1145/3543507.3583868)

**Haoran Wang**, Yingtong Dou, Canyu Chen, Lichao Sun, Philip S. Yu, Kai Shu

_Proceedings of the ACM Web Conference 2023_

[![git](https://img.shields.io/github/stars/hwang219/AttackFakeNews)](https://github.com/hwang219/AttackFakeNews)
[![video](https://img.shields.io/badge/Video-8A2BE2)](https://vimeo.com/817846141?share=copy)
[![report](https://img.shields.io/badge/Reported%20By-MAIEI-teal)](https://montrealethics.ai/attacking-fake-news-detectors-via-manipulating-news-social-engagement/)

</div>
</div>

<!-- ## Preprints

- [Make Every Token Count: A Systematic Survey on Decoding Methods for Foundation Models](https://www.researchgate.net/publication/387703971_Make_Every_Token_Count_A_Systematic_Survey_on_Decoding_Methods_for_Foundation_Models?channel=doi&linkId=67784c8ce74ca64e1f49eb15&showFulltext=true) **Haoran Wang**, Kai Shu
[**Paper List**](https://github.com/wang2226/Awesome-LLM-Decoding) ![](https://img.shields.io/github/stars/wang2226/Awesome-LLM-Decoding) -->

# 🔬 Research Experience

> **Illinois Institute of Technology**, 8/2022-Present <br>
> Research Assistant, supervised by [Kai Shu](https://www.cs.emory.edu/~kshu5/)

> **Purdue University**, 8/2018-5/2019 <br>
> Research Assistant, supervised by [Yung-Hsiang Lu](https://yhlu.net/)

# Education

- _2022 - Now_, Ph.D., Computer Science. Emory University.
- _2021_, M.S., Computer Science. University of Oregon.
- _2019_, B.S., Computer Science. Purdue University.

# Academic Service

- **Session Chair:** CIKM 2024
- **Reviewer/Program Committee:** KDD{2024, 2025}, AAAI{2024, 2025}, PAKDD{2025}
- **Volunteer:** ACM FAccT 2023

---

Last updated on Jan 23, 2025.

<a href='https://mapmyvisitors.com/web/1bweu'  title='Visit tracker'><img src='https://mapmyvisitors.com/map.png?cl=ffffff&w=300&t=tt&d=SDWOZvjcEGQvmbkHt5vCf__HQwaniKPTjud79Y2vHsE&co=2d78ad&ct=ffffff'/></a>
