import React from "react";
import "./../App.css";
import { useSubmit } from "react-router-dom";

const Login: React.FC = () => {
	return (
		<div>
			<div className="container-fluid">
				<div className="row no-gutter">
					<div className="col-md-6 d-none d-md-flex bg-image"></div>

					<div className="col-md-6 bg-light">
						<div className="login d-flex align-items-center py-5">
							<div className="container">
								<div className="row">
									<div className="col-lg-10 col-xl-7 mx-auto">
										<h3 className="display-4 text-center">
											NSPD
										</h3>
										<p className="text-center text-muted mb-4">
											Login Demo
										</p>
										<form>
											<div className="form-group mb-3">
												<input
													id="inputEmail"
													type="email"
													placeholder="Email address"
													required={true}
													autoFocus={true}
													className="form-control rounded-pill border-0 shadow-sm px-4"
												/>
											</div>
											<div className="form-group mb-3">
												<input
													id="inputPassword"
													type="password"
													placeholder="Password"
													required={true}
													className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
												/>
											</div>
											<div className="custom-control custom-checkbox mb-3">
												<input
													id="customCheck1"
													type="checkbox"
													checked={false} // warning: 
													className="custom-control-input"
												/>
												<label
													htmlFor="customCheck1"
													className="custom-control-label"
												>
													Remember password
												</label>
											</div>
											<button
												type="submit"
												className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                                                onSubmit={useSubmit} // warning:
											>
												Sign in
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
